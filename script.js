
fetch('https://reqres.in/api/users').then((data)=>{
    // console.log(data);
    return data.json();

}).then((completeData)=>{
    let tableData="";
    completeData.data.map((values)=>{
        tableData+= ` <tr>
        <td id="avatar"><img src="${values.avatar}"></td>
        <td id="firstname">${values.first_name}</td>
        <td id="lastname">${values.last_name}</td>
        <td id="email">${values.email}</td>
        </tr> `;

    });
    document.getElementById("table_body").innerHTML= tableData;
}).catch((err)=>{
    console.log(err);
})