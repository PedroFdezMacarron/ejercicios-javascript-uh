const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (i = 0; i < alumns.length; i++) {
  let tAproved = 0;
  for (j = 1; j <= 3; j++) {
    let vcampo = "T" + j;

    (alumns[i][vcampo] == true) ? tAproved++:tAproved;

    // if (alumns[i][vcampo] == true) {
    //   tAproved += 1;      
    // }
  }

  (tAproved >= 2) ? alumns[i].isApproved = true:alumns[i].isApproved = false;

  // if (tAproved >= 2) {
  //   alumns[i].isApproved = true;
  // } else {
  //   alumns[i].isApproved = false;
  // }
}

for (i = 0; i < alumns.length; i++) {

  (alumns[i].isApproved) ? console.log("Aprobado", alumns[i]) : console.log("Suspendido", alumns[i]) ;

  // if (alumns[i].isApproved) {
  //   console.log("Aprobado", alumns[i]);
  // } else {
  //   console.log("Suspendido", alumns[i]);
  // }


}
