function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob == "") {
        alert("Please select your date of birth");
        return;
    }

    let birth = new Date(dob);
    let today = new Date();

    let year = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    let day = today.getDate() - birth.getDate();

    if (day < 0) {
        month--;
        day += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    let total = Math.floor(
        (today - birth) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("year").innerText = year;
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = day;
    document.getElementById("total").innerText = total;
}