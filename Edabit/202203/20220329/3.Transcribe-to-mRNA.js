// Transcribe the given DNA strand into corresponding mRNA - a type of RNA,
// that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.

const dnaToRna = dna => {
    const mRNA = {
        A: 'U',
        T: 'A',
        G: 'C',
        C: 'G',
    }

    let x = dna.replace(/[ATGC]/g, match => mRNA[match])
    return x

    //return [...dna].map(i => mRNA[i]).join('');
}

dnaToRna('ATTAGCGCGATATACGCGTAC') // "UAAUCGCGCUAUAUGCGCAUG"

dnaToRna('CGATATA') // "GCUAUAU"

dnaToRna('GTCATACGACGTA') // "CAGUAUGCUGCAU"
