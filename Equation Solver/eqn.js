let Soln1=document.getElementById('soln1')
let LAMans=document.getElementById('lam-ans')
let SimulAns=document.getElementById('simul-ans')
let PolyAns=document.getElementById('poly-ans')
function ans1(){
let L1=parseFloat(document.getElementById('l1').value)
let N1=parseFloat(document.getElementById('n1').value)
let R1=parseFloat(document.getElementById('r1').value)
Soln1.innerHTML= `x = ${(R1-N1)/L1}`
}
function show1(){
let L1=parseFloat(document.getElementById('l1').value)
let N1=parseFloat(document.getElementById('n1').value)
let R1=parseFloat(document.getElementById('r1').value)

Soln1.innerHTML=`
     ${L1}x + ${N1}=${R1}<br>
     Subtract ${N1} from both sides<br>
     ${L1}x + ${N1} - ${N1} = ${R1} - ${N1}<br>
     ${L1}x = ${R1} - ${N1}<br>
     ${L1}x = ${R1-N1}<br>
     Divide both sides by ${L1}<br>
     x = ${(R1-N1)/L1}     
`
}
function simul2() {
SimulAns.innerHTML=`
<br>
 <input id="a1" type="number"> x +
      <input id="b1" type="number"> y =
      <input id="c1" type="number">  ...eqn 1
    <br>
    <input id="a2" type="number"> x +
    <input id="b2" type="number"> y =
    <input id="c2" type="number">  ...eqn 2<br>
<br><button onclick="simulAns2()" class="simulBut">Answer</button>
    <button onclick="simulShowSoln2()" class="simulBut">Solution</button>
    <p id="simul-soln"></p>
    <br>
    <hr>
`
}

function simulShowSoln2(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2'). value)
let C2=parseFloat(document.getElementById('c2').value)
let simulSoln=document.getElementById('simul-soln')

simulSoln.innerHTML=
`
From eqn 1, ${A1}x + ${B1}y = ${C1}<br>
<b>Make x the subject of formula</b><br>
<b>Subtract ${B1}y from both sides.</b> <br>
${A1}x + ${B1}y - ${B1}y = ${C1} - ${B1}y<br>
${A1}x = ${C1} - ${B1}y<br>

<b>Divide Both sides By ${A1}</b><br>

x = ((${C1} - ${B1}y)/${A1})<br>
<b>Substitute the value of x in eqn 2.</b><br>
${A2}((${C1} - ${B1}y)/${A1}) + ${B2}y = ${C2}<br>
<b>Expand the bracket in the LHS</b><br>
${A2*C1/A1} - ${A2*B1/A1}y + ${B2}y = ${C2}<br>
<b>Simplifying result...<br></b>
${A1*B2-A2*B1}y = ${A1*C2-A2*C1}<br>
<b>y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}</b><br>
<b>To get x, substitute the value of y in eqn 1.</b><br>
Say, ${A1}x + ${B1}(${(A1*C2-A2*C1)/(A1*B2-A2*B1)}) = ${C1}<br>
<b>Subtract ${B1}(${(A1*C2-A2*C1)/(A1*B2-A2*B1)}) from both sides.</b><br>
x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)}<br><br>
Hence, <b>x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)} and y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}<b>

`
}
function simulAns2(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2'). value)
let C2=parseFloat(document.getElementById('c2').value)
let simulSoln=document.getElementById('simul-soln')

simulSoln.innerHTML=`
x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)}<br>

y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}

`
}
function simul3() {
SimulAns.innerHTML=`
<br>
     <input id="a1" type="number"> x +
      <input id="b1" type="number"> y +
      <input id="c1" type="number"> z =
     <input id="d1" type="number">  ...eqn 1
    <br>
    <input id="a2" type="number"> x +
 <input id="b2" type="number"> y +
 <input id="c2" type="number"> z =
 <input id="d2" type="number">  ...eqn 2
 <br>
 <input id="a3" type="number"> x +
 <input id="b3" type="number"> y +
 <input id="c3" type="number"> z =
 <input id="d3" type="number">  ...eqn 3
<br><br><button onclick="simulAns3()" class="simulBut">Answer</button>
    <button onclick="simulShowSoln3()" class="simulBut">Solution</button>
    <p id="simul-soln"></p>
    <br>
    <hr>
`
}
function simulAns3(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let D1=parseFloat(document.getElementById('d1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2').value)
let C2=parseFloat(document.getElementById('c2').value)
let D2=parseFloat(document.getElementById('d2'). value)
let A3=parseFloat(document.getElementById('a3'). value)
let B3=parseFloat(document.getElementById('b3'). value)
let C3=parseFloat(document.getElementById('c3').value)
D3=parseFloat(document.getElementById('d3').value)
let P1=A1*B2-A1*A2*B1
let Q1=A1*C2-A1*A2*C1
let R1=A1*D2-A1*A2*D1
let P2=A1*B3-A1*A3*B1
let Q2=A1*C3-A1*A3*C1
let R2=A1*D3-A1*A3*D1

let Z=(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)
let Y=(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1
let X=(D1-B1*Y-C1*Z)/A1
let simulSoln=document.getElementById('simul-soln')
simulSoln.innerHTML=`
<b>x = ${X}</b><br>
<b>y = ${Y}</b><br>
<b>z = ${Z}</b><br>
`
}
function simulShowSoln3(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let D1=parseFloat(document.getElementById('d1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2').value)
let C2=parseFloat(document.getElementById('c2').value)
let D2=parseFloat(document.getElementById('d2'). value)
let A3=parseFloat(document.getElementById('a3'). value)
let B3=parseFloat(document.getElementById('b3'). value)
let C3=parseFloat(document.getElementById('c3').value)
D3=parseFloat(document.getElementById('d3').value)
let P1=A1*B2-A1*A2*B1
let Q1=A1*C2-A1*A2*C1
let R1=A1*D2-A1*A2*D1
let P2=A1*B3-A1*A3*B1
let Q2=A1*C3-A1*A3*C1
let R2=A1*D3-A1*A3*D1

let Z=(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)
let Y=(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1
let X=(D1-B1*Y-C1*Z)/A1
let simulSoln=document.getElementById('simul-soln')
simulSoln.innerHTML=`
<b>From eqn 1, make x the subject of Formula.</b><br>
<b>Subtract ${B1}y + ${C1}z from both sides</b><br>
${A1}x = ${D1} - ${B1}y - ${C1}z<br>
<b>Divide all through by ${A1}</b><br>
x = (${D1} - ${B1}y - ${C1}z)/${A1}<br>
<b>Now, substitute the value of x in eqn's 2 and 3</b><br>
Eq2: ${A2}((${D1} - ${B1}y - ${C1}z)/${A1}) + ${B2}y + ${C2}z = ${D2}<br>
<b>Now simplify</b><br>
${A1*A2}(${D1} - ${B1}y - ${C1}z) + ${A1*B2}y + ${A1*C2}z = ${A1*D2}<br>
${A1*B2-A1*A2*B1}y + ${A1*C2-A1*A2*C1}z = ${A1*D2-A1*A2*D1}...eq4<br><br>
Eq 3: ${A3}((${D1} - ${B1}y -${C1}z)/${A1}) + ${B3}y + ${C3}z = ${D3}<br>
<b>Now simplify</b><br>
${A1*A3}(${D1} - ${B1}y - ${C1}z) + ${A1*B3}y + ${A1*C3}z = ${A1*D3}<br>
${A1*B3-A1*A3*B1}y + ${A1*C3-A1*A3*C1}z = ${A1*D3-A1*A3*D1}...eq5
<hr>
<b>Bringing eq4 and eq5 together.</b><br>

${P1}y + ${Q1}z = ${R1}...eq4<br>
${P2}y + ${Q2}z = ${R2}...eq5<br>
<b>Make y the subject of formula in eq5</b><br>
y = (${R1} + ${-Q1}z)/${P1}<br>
<b>Substitute the value of y in eq5</b><br>
(${P2})(${R1} + ${-Q1}z)/${P1}) + ${Q2}z = ${R2}<br>
<b>Multiply all through by ${P1}</b><br>
${P2}(${R1} + ${-Q1}z) + ${P1*Q2}z = ${R2*P1}<br>
${P2*R1} + ${-P2*Q1}z + ${P1*Q2}z= ${P1*R2}<br>
${-P2*Q1+P1*Q2}z = ${(P1*R2-P2*R1)}<br>
<b>z = ${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}</b><br>
<b>To get y, substitute the value of z in eq4;</b><br>
${P1}y +${Q1}(${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)})=${R1}<br>
<b>Subtract ${-Q1}(${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}) from both sides.</b><br>
${P1}y = ${R1} + ${-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}<br>
<b>y=${(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1}</b><br>
<b>To get x, substitute the values of y and z in eq 1.</b>
${A1}x = ${D1} - ${B1}y - ${C1}z<br>
${A1}x = ${D1} - ${B1}(${Y}) - ${C1}(${Z})<br>
x = ${(D1-B1*Y-C1*Z)/A1}<br>
<b>Hence, x = ${X}, y = ${Y} and z = ${Z}</b>
`
}

function quadr(){
    PolyAns.innerHTML=`
    <br>
 <input id="qA" type="number">x² +
 <input id="qB" type="number">x + 
 <input id="qC" type="number"> = 0<br><br>
 <button onclick="polyAns()" class="poly-but">Answer</button>
 <button onclick="polySoln()" class="poly-but">Solution</button>
 <p id='poly-answer'></p>
 
 <hr>
    `
}
function polyAns(){
    let polyAnswer=document.getElementById('poly-answer')
    let QA=parseFloat(document.getElementById('qA').value)
let QB=parseFloat(document.getElementById('qB').value)
let QC=parseFloat(document.getElementById('qC').value)

    polyAnswer.innerHTML=`
<b>x = ${(-QB/(2*QA))+((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b> or<br>
<b>x = ${(-QB/(2*QA))-((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b>

    `
}
function polySoln(){
    let polyAnswer=document.getElementById('poly-answer')
    let QA=parseFloat(document.getElementById('qA').value)
let QB=parseFloat(document.getElementById('qB').value)
let QC=parseFloat(document.getElementById('qC').value)
polyAnswer.innerHTML=`
    ${QA}x² + ${QB}x + ${QC} = 0<br>
    <b>Subtract both sides by ${QC}</b><br>
    ${QA}x² + ${QB}x = -${QC}<br>
    <b>Divide all through by ${QA}</b><br>
    x² + (${QB}/${QA})x = -${QC}/${QA}<br>
  <b>Add (${QB}/${2*QA})² to both sides</b><br>
 x² + (${QB}/${QA})x + (${QB}/${2*QA})²= -${QC}/${QA} + (${QB}/${2*QA})²<br>
 <b>By factorization</b><br>
 (x + ${QB}/${2*QA})² = -${QC}/${QA} + ${QB}²/${4*QA}²<br>
 <b>Further Simplification</b><br>
  (x + ${QB}/${2*QA})² = ${-4*QA*QC+QB**2}/${4*QA*QA}<br>
  <b>Square root both sides</b><br>
  x + ${QB}/${2*QA} = ±√(${-4*QA*QC+QB**2})/(${2*QA})
<b>Subtract ${QB/(2*QA)} from both sides</b><br>
x = -${QB/(2*QA)} ± √(${-4*QA*QC+QB**2})/(${2*QA})<br>
Hence, <b>x = ${(-QB/(2*QA))+((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b> or<br>
<b>x = ${(-QB/(2*QA))-((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b>
`
}
function foLam() {
    LAMans.innerHTML=`
    xe<sup>x</sup> = <input id="cl1" type="number">
<br>
<button onclick="foLambertAns()" type="number">Answer</button>
 <button onclick="foLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
    `
}
function foLambertAns() {
let lamAns=document.getElementById('lam-answer')
let CL1=parseFloat(document.getElementById('cl1').value)

   if(CL1===""){
    lamAns.innerHTML="Invalid! Input can't be empty"
   }else{
    lamAns.innerHTML=`
    x = W(${CL1})
    `
   }
}
function foLambertSoln() {
let lamAns=document.getElementById('lam-answer')
let CL1=parseFloat(document.getElementById('cl1').value)

    lamAns.innerHTML=`
 <b>Apply Lambert Function to both sides</b><br>
 W(xe<sup>x</sup>) = W(${CL1})<br>
 
    x = W(${CL1})
    `
}
function fLam(){
  

LAMans.innerHTML=`
x^(<input id="v1" type="number">x) =
 <input id="cl1" type="number"><br><br>

<button onclick="fLambertAns()">Answer</button>
 <button onclick="fLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
`
}
function fLambertAns() {
let lamAns=document.getElementById('lam-answer')
  let V1=parseFloat(document.getElementById('v1').value)
  let CL1=parseFloat(document.getElementById('cl1').value)
  lamAns.innerHTML=`
    x = e <sup>W((1/${V1}(Ln${CL1}))</sup>
`
}
function fLambertSoln() {
let lamAns=document.getElementById('lam-answer')
  let V1=parseFloat(document.getElementById('v1').value)
  let CL1=parseFloat(document.getElementById('cl1').value)
  lamAns.innerHTML=`
<b> Find the ${V1}th root of both sides.</b><br>
 x<sup>x</sup> = ${CL1}<sup>1/${V1}</sup><br>
<b>Apply the Ln function to both sides.</b><br>
 xLn(x) = 1/${V1}(Ln${CL1})<br>
 <b>By laws of Logarithm, x = e<sup>Lnx</sup></b><br>
 e<sup>Lnx</sup> × Lnx = (1/${V1}(Ln${CL1})<br>
 <b>Apply Lambert Function to both sides</b><br>
 W(e<sup>Lnx</sup> × Lnx) = W((1/${V1}(Ln${CL1}))<br>
 <b>But, W(ye<sup>y</sup>) = y</b><br>
 Lnx = W((1/${V1}(Ln${CL1}))<br>
 .: x = e <sup>W((1/${V1}(Ln${CL1}))</sup>
  `
}
function sLam() {
    LAMans.innerHTML=`
 Lnx = <input id="v1" type="number">x + 
 <input id="cl1" type="number">
 <br>
 <button onclick="sLambertAns()">Answer</button>
 <button onclick="sLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
    `
}
function sLambertAns(){
let lamAns=document.getElementById('lam-answer')
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)
lamAns.innerHTML=`
x = e<sup>${CL1} - W(-${V1}e<sup>${CL1}</sup>)
`
}
