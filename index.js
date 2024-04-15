const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let date = new Date()

    function getFullMonthDates(year, month) {
        const dates = []
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        for (let i = 1; i <= daysInMonth; i++) {
            dates.push(new Date(year, month, i))
        }

        return dates
    }

    function getFullWeekDates(date) {
        const dayOfWeek = date.getDay()
        const firstDayOfWeek = new Date(date)
        firstDayOfWeek.setDate(date.getDate() - dayOfWeek)

        const weekDates = []
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(firstDayOfWeek)
            currentDate.setDate(firstDayOfWeek.getDate() + i)
            weekDates.push(currentDate)
        }

        return weekDates
    }

    // function dateOfDay(date, day) {
    //     try {
    //         const weekDates = getFullWeekDates(date)
    //         const dayDate = weekDates.filter(date => {
    //             if (days[date.getDay()] === day)
    //                 return date
    //         })
    //         return dayDate[0].getDate()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    function incrimentMonth(){
        date = new Date(date.getFullYear(), date.getMonth() + 2, 0)
        monthCalendar(date)
    }

    function decrimentMonth(){
        date = new Date(date.getFullYear(), date.getMonth(), 0)
        monthCalendar(date)
    }

    function currentMonth(){
        date = new Date()
        monthCalendar(date)
    }

    function monthCalendar(currentDate) {
    
        const date = new Date(currentDate)

        $('#calender').html(`
        <div class='row'>
            <div class='col-2'>
                <h2>${months[date.getMonth()]} ${date.getFullYear()}</h2>
            </div>
            <div class='col-2'>
                <button class='btn btn-secondary' onclick='currentMonth()'>today</button>
                <button class='btn btn-secondary' onclick='decrimentMonth()'><i class="bi bi-arrow-left"></i></button>
                <button class='btn btn-secondary' onclick='incrimentMonth()'><i class='bi bi-arrow-right'></i></button>
            </div>
        </div>
        <div class="row text-center" id="days">
        </div>
        `)

        const dates = getFullMonthDates(date.getFullYear(), date.getMonth())
        let dateIndex = 0
        days.map(day => {
            $('#days').append(`
            <div class="col border">
                ${day}
            </div>`)
            })

        for (let i = 0; i < Math.ceil(dates.length / 7); i++) {
            const weekDates = getFullWeekDates(dates[i * 7])
            $('#calender').append(`
            <div class='row'>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[0].getMonth() && 'text-secondary'}'>
                    ${weekDates[0].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[1].getMonth() && 'text-secondary'}'>
                    ${weekDates[1].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[2].getMonth() && 'text-secondary'}'>
                    ${weekDates[2].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[3].getMonth() && 'text-secondary'}'>
                    ${weekDates[3].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[4].getMonth() && 'text-secondary'}'>
                    ${weekDates[4].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[5].getMonth() && 'text-secondary'}'>
                    ${weekDates[5].getDate()}
                </div>
                <div class='col border py-5 ${dates[0].getMonth() !== weekDates[6].getMonth() && 'text-secondary'}'>
                    ${weekDates[6].getDate()}
                </div>
            </div>`)
        }
    }

    $(document).ready(() => {
        monthCalendar(date)
    })