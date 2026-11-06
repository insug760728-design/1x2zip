// ============================================================================
// TOKEON US - POLYMORPHIC MACHINE-CODE BINARY COMPILER & AUTO-MUTATION ENGINE
// Automatically re-encrypts app.js with a fresh 256-bit (32-byte) rolling key,
// non-linear prime feedback, 8-bit circular bit-rotation, and randomized hex
// machine registers on every build and every scheduled GitHub Actions update.
// ============================================================================
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function decodeExistingAppJs(jsText) {
  // Check if it uses the new v2 Polymorphic Machine VM (marked by TK_POLY_VM_V2)
  const v2Meta = jsText.match(/\/\*\s*TK_POLY_VM_V2:(\{.*?\})\s*\*\//);
  if (v2Meta) {
    const meta = JSON.parse(v2Meta[1]);
    const b64Joined = meta.chunks.join('');
    const enc = Buffer.from(b64Joined, 'base64');
    const out = Buffer.alloc(enc.length);
    const K = meta.k;
    const M = meta.m;
    const S = meta.s;
    const R = meta.r;
    for (let i = 0; i < enc.length; i++) {
      const b = enc[i];
      const x = (((b >>> R) | (b << (8 - R))) & 0xFF);
      const mask = (K[i & 31] ^ ((i * M + S) & 0xFF)) & 0xFF;
      out[i] = (x ^ mask) & 0xFF;
    }
    return out.toString('utf8');
  }

  // Fallback: decode v1 16-byte XOR format
  const m1 = jsText.match(/\)\('([A-Za-z0-9+/=]+)',\[([0-9,]+)\]\)/);
  if (m1) {
    const enc = Buffer.from(m1[1], 'base64');
    const key = m1[2].split(',').map(Number);
    const out = Buffer.alloc(enc.length);
    for (let i = 0; i < enc.length; i++) {
      out[i] = enc[i] ^ key[i & 15] ^ ((i * 13) & 255);
    }
    return out.toString('utf8');
  }

  throw new Error('Unrecognized app.js binary format');
}

function randHexId(prefix) {
  return prefix + crypto.randomBytes(3).toString('hex');
}

function compilePolymorphicMachineJs(plainUtf8) {
  const inputBytes = Buffer.from(plainUtf8, 'utf8');
  const K = [];
  const rawKeyBytes = crypto.randomBytes(32);
  for (let i = 0; i < 32; i++) {
    K.push((rawKeyBytes[i] % 253) + 1);
  }
  const primes = [13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const M = primes[crypto.randomInt(0, primes.length)];
  const S = crypto.randomInt(1, 255);
  const R = crypto.randomInt(1, 8); // 1..7 bit rotation

  const encBytes = Buffer.alloc(inputBytes.length);
  for (let i = 0; i < inputBytes.length; i++) {
    const mask = (K[i & 31] ^ ((i * M + S) & 0xFF)) & 0xFF;
    const x = (inputBytes[i] ^ mask) & 0xFF;
    encBytes[i] = (((x << R) | (x >>> (8 - R))) & 0xFF);
  }

  const fullB64 = encBytes.toString('base64');
  // Split into 8 machine segments
  const numChunks = 8;
  const chunkLen = Math.ceil(fullB64.length / numChunks);
  const chunks = [];
  for (let c = 0; c < numChunks; c++) {
    chunks.push(fullB64.slice(c * chunkLen, (c + 1) * chunkLen));
  }

  // Randomized machine register variable names
  const vChunks = randHexId('_0x');
  const vKey = randHexId('_0x');
  const vMul = randHexId('_0x');
  const vSeed = randHexId('_0x');
  const vRot = randHexId('_0x');
  const vRaw = randHexId('_0x');
  const vBuf = randHexId('_0x');
  const vIdx = randHexId('_0x');
  const vByte = randHexId('_0x');
  const vUnrot = randHexId('_0x');
  const vStr = randHexId('_0x');

  const keyHexList = K.map(n => '0x' + n.toString(16)).join(',');
  const chunkLiterals = chunks.map(c => `'${c}'`).join(',');

  const header = `/* PATENT PENDING (10-2026-0205596) - PROTECTED POLYMORPHIC MACHINE ENGINE [${new Date().toISOString()}] */\n`;
  const vmCode = `(function(${vChunks},${vKey},${vMul},${vSeed},${vRot}){` +
    `if(typeof window==="undefined"||typeof document==="undefined")return;` +
    `var ${vRaw}=atob(${vChunks}.join("")),${vBuf}=new Uint8Array(${vRaw}.length);` +
    `for(var ${vIdx}=0;${vIdx}<${vRaw}.length;${vIdx}++){` +
    `var ${vByte}=${vRaw}.charCodeAt(${vIdx});` +
    `var ${vUnrot}=(((${vByte}>>>${vRot})|(${vByte}<<(8-${vRot})))&0xff);` +
    `${vBuf}[${vIdx}]=(${vUnrot}^${vKey}[${vIdx}&0x1f]^((${vIdx}*${vMul}+${vSeed})&0xff))&0xff;` +
    `}` +
    `var ${vStr}=new TextDecoder("utf-8").decode(${vBuf});` +
    `${vBuf}.fill(0);${vKey}.fill(0);${vChunks}.length=0;` +
    `(new Function(${vStr}))();${vStr}="";` +
    `})([${chunkLiterals}],[${keyHexList}],0x${M.toString(16)},0x${S.toString(16)},0x${R.toString(16)});`;

  // Verify round-trip decoding before returning
  const testRaw = Buffer.from(chunks.join(''), 'base64');
  const testOut = Buffer.alloc(testRaw.length);
  for (let i = 0; i < testRaw.length; i++) {
    const b = testRaw[i];
    const u = (((b >>> R) | (b << (8 - R))) & 0xFF);
    testOut[i] = (u ^ K[i & 31] ^ ((i * M + S) & 0xFF)) & 0xFF;
  }
  if (testOut.toString('utf8') !== plainUtf8) {
    throw new Error('Polymorphic round-trip verification failed!');
  }

  return header + vmCode;
}

function decodeCurrentPolymorphicJs(jsText) {
  // Match the generated VM pattern: })(['...','...'],[0x..,0x..],0xM,0xS,0xR);
  const m = jsText.match(/\}\)\(\[('[A-Za-z0-9+/=',]+')\],\[([0-9a-fx,]+)\],0x([0-9a-f]+),0x([0-9a-f]+),0x([0-9a-f]+)\);/i);
  if (m) {
    const b64 = m[1].replace(/'/g, '').replace(/,/g, '');
    const K = m[2].split(',').map(s => parseInt(s, 16));
    const M = parseInt(m[3], 16);
    const S = parseInt(m[4], 16);
    const R = parseInt(m[5], 16);
    const enc = Buffer.from(b64, 'base64');
    const out = Buffer.alloc(enc.length);
    for (let i = 0; i < enc.length; i++) {
      const b = enc[i];
      const u = (((b >>> R) | (b << (8 - R))) & 0xFF);
      out[i] = (u ^ K[i & 31] ^ ((i * M + S) & 0xFF)) & 0xFF;
    }
    return out.toString('utf8');
  }
  return decodeExistingAppJs(jsText);
}

if (require.main === module) {
  const rootDir = path.join(__dirname, '..');
  const appJsPath = path.join(rootDir, 'app.js');
  const webAppJsPath = path.join(rootDir, '1x2zip_web', 'app.js');
  const customInput = process.argv[2];

  let plainSource = '';
  if (customInput && fs.existsSync(customInput)) {
    plainSource = fs.readFileSync(customInput, 'utf8');
  } else {
    const currentPacked = fs.readFileSync(appJsPath, 'utf8');
    plainSource = decodeCurrentPolymorphicJs(currentPacked);
  }

  const mutatedJs = compilePolymorphicMachineJs(plainSource);
  // Double-check round-trip decoding from the final string
  const verifiedPlain = decodeCurrentPolymorphicJs(mutatedJs);
  if (verifiedPlain !== plainSource) {
    throw new Error('Final polymorphic verification mismatch!');
  }

  fs.writeFileSync(appJsPath, mutatedJs, 'utf8');
  if (fs.existsSync(path.dirname(webAppJsPath))) {
    fs.writeFileSync(webAppJsPath, mutatedJs, 'utf8');
  }
  console.log('Polymorphic Machine-Code Guard applied OK! Size:', mutatedJs.length, 'bytes');
}

module.exports = { compilePolymorphicMachineJs, decodeCurrentPolymorphicJs };
