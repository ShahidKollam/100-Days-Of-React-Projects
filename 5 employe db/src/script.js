(async function () {
    const data = await fetch("./src/data.json");
    const res = await data.json();

    let employees = res;
    let selectedEmployId = employees[0].id;
    let selectedEmploy = employees[0];

    const employeeList = document.querySelector(".employee__names--list");
    const employeeInfo = document.querySelector(".employee__single--info");

    employeeList.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN" && selectedEmployId !== e.target.id) {
            selectedEmployId = e.target.id;
            renderEmployees();
            renderSingleEmployee();
        }
    });

    const renderEmployees = () => {
        employeeList.innerHTML = "";
        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("employee__names--item");

            if (parseInt(selectedEmployId, 10) === emp.id) {
                employee.classList.add("selected");
                selectedEmploy = emp;
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `▪ ${emp.firstName} ${emp.lastName} <i class="emplyeeDelete">❌</i>`;

            employeeList.append(employee);
        });
    };

    const renderSingleEmployee = () => {
        employeeInfo.innerHTML = `
        <img src="${selectedEmploy.imageUrl}" /> `
    };

    if(selectedEmploy) renderSingleEmployee();

    renderEmployees();
})();
