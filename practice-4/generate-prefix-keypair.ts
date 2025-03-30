import { Keypair } from "@solana/web3.js";

const TARGET_PREFIX = "vlad";

function findKeyWithPrefix() {
    let tries = 0;

    while (true) {
        const keypair = Keypair.generate();
        const pubKeyBase58 = keypair.publicKey.toBase58();
        tries++;

        if (pubKeyBase58.toLowerCase().startsWith(TARGET_PREFIX)) {
            console.log("Match found after", tries, "tries!");
            console.log("Public Key:", pubKeyBase58);
            console.log("Private Key (Base58):", keypair.secretKey);
            return;
        }

        if (tries % 1000 === 0) {
            console.log("Tried", tries, "keys so far...");
        }
    }
}

findKeyWithPrefix();