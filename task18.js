const Places=['Madina','Naran','Turkey','Switzerland','Maldives'];
console.log(`In Original     Oder        :\n${Places}`);
const sortar=[...Places].sort();
console.log(`In Alphabetical Oder        :\n${sortar}`);
console.log(`It Still In Original   Oder :\n${Places}`);
const resortar=[...sortar].sort().reverse();
console.log(`In Reverse-Alphabetical Oder        :\n${resortar}`);
console.log(`It Still In Original   Oder :\n${Places}`);
const resortar2=[...Places].reverse();
console.log(`In Reverse-Alphabetical Oder        :\n${resortar2}`);
const resortar3=[...Places].reverse();
console.log(`In Reverse-Alphabetical Oder Again        :\n${resortar3}`);
const sort2=[...Places].sort();
console.log(`In Alphabetical Oder Original        :\n${sort2}`);
const sort3=[...resortar3].sort();
console.log(`In Alphabetical Oder Original        :\n${sort3}`);
//first in sorting then apply reverse then again apply sort then in final check the sort of original and sort of reverse array