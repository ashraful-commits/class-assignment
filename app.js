Class_five.map((data,index)=>{

let result =data.Ban>=33 && data.Eng>=33 && data.Math>=33 && data.Sc>=33 && data.S_Sc>=33 && data.Rel>=33 ?' passed' : 'Failed';


let cgpa = (getGpa(data.Ban)+getGpa(data.Eng)+getGpa(data.Math)+getGpa(data.Sc)+getGpa(data.S_Sc)+getGpa(data.Rel))/6
    let final_CGPA=cgpa.toFixed(2);
console.log(`
${data.Name}
${data.Roll}
${data.Gender}

------------------------------------------------------------------------------------------------------------
Subject                 Mark       GPA     Grade            CGPA                Final Result
Bangla                  ${data.Ban}         ${getGpa(data.Ban)}        ${getGrade(data.Ban)}
English                 ${data.Eng}        ${getGpa(data.Eng)}          ${getGrade(data.Eng)}      ${final_CGPA}      ${result}
Math                    ${data.Math}        ${getGpa(data.Math)}        ${getGrade(data.Math)}
Science                 ${data.Sc}          ${getGpa(data.Sc)}        ${getGrade(data.Sc)}
Social Science          ${data.S_Sc}        ${getGpa(data.S_Sc)}        ${getGrade(data.S_Sc)}
Religion                ${data.Rel}         ${getGpa(data.Rel)}         ${getGrade(data.Rel)}
`)
})