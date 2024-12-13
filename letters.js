const lettersRaw = `0 (1).png
0 (2).png
1 (1).png
1 (2).png
2 (1).png
2 (2).png
2 (3).png
2 (4).png
3 (1).png
3 (2).png
3 (3).png
4 (1).png
4 (2).png
4 (3).png
5 (1).png
5 (2).png
5 (3).png
6 (1).png
6 (2).png
6 (3).png
6 (4).png
7 (1).png
7 (2).png
7 (3).png
7 (4).png
8 (1).png
8 (2).png
8 (3).png
9 (1).png
9 (2).png
9 (3).png
A (1).png
A (2).png
A (3).png
A (4).png
B (1).png
B (2).png
B (3).png
C (1).png
C (2).png
C (3).png
D (1).png
D (2).png
D (3).png
D (4).png
E (1).png
E (2).png
E (3).png
F (1).png
F (2).png
F (3).png
F (4).png
G (1).png
G (2).png
G (3).png
G (4).png
H (1).png
H (2).png
H (3).png
I (1).png
I (2).png
I (3).png
I (4).png
J (1).png
J (2).png
J (3).png
J (4).png
K (1).png
K (2).png
K (3).png
L (1).png
L (2).png
L (3).png
L (4).png
M (1).png
M (4).png
M (5).png
N (1).png
N (2).png
N (3).png
O (1).png
O (2).png
O (3).png
O (4).png
P (1).png
P (2).png
P (3).png
P (4).png
Q (1).png
Q (2).png
Q (3).png
Q (4).png
R (1).png
R (2).png
R (3).png
R (4).png
S (1).png
S (2).png
S (3).png
S (4).png
T (1).png
T (2).png
T (3).png
T (4).png
U (1).png
U (2).png
U (3).png
U (4).png
V (1).png
V (2).png
V (3).png
V (4).png
V (5).png
W (1).png
W (2).png
W (3).png
W (4).png
X (1).png
X (2).png
X (3).png
X (4).png
Y (1).png
Y (2).png
Y (3).png
Y (4).png
Z (1).png
Z (2).png
Z (3).png
Z (4).png`.split("\n");
const letters = {};
for(const letter of lettersRaw) {
    const char = letter[0];
    const ind = parseInt(letter[3]) - 1;
    if(!(char in letters)) letters[char] = [];
    letters[char].push("letters/" + letter);
}

const insertLetters = (el, text, height) => {
    for(const i of text) {
        const char = i.toUpperCase();
        if(char === " ") {
            const whiteSpace = document.createElement("div");
            whiteSpace.style.width = (height / 2) + "em";
            whiteSpace.style.height = height + "em";
            el.appendChild(whiteSpace);
            continue;
        }
        if(!(char in letters)) continue;
        const letter = document.createElement("img");
        const src = letters[char][Math.floor(Math.random() * letters[char].length)];
        letter.src = src;
        letter.style.height = height + "em";
        el.appendChild(letter);
    }
}