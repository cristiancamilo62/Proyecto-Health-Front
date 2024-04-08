import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  month_names: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  curr_month!: number;
  curr_year!: number;
  isMonthListVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const currDate = new Date();
    this.curr_month = currDate.getMonth();
    this.curr_year = currDate.getFullYear();
    this.generateCalendar(this.curr_month, this.curr_year);
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 ===0);
  }

  getFebDays(year: number): number {
    return this.isLeapYear(year) ? 29 : 28;
  }

  generateCalendar(month: number, year: number): void {
    const daysInMonth = this.getDaysInMonth(month, year);
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const calendarDaysContainer = document.querySelector('.calendar-days');

    calendarDaysContainer!.innerHTML = '';

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDaysContainer!.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const calendarDay = document.createElement('div');
      calendarDay.textContent = day.toString();
      calendarDay.classList.add('calendar-day-hover');

      if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        calendarDay.classList.add('curr-date');
      }

      calendarDaysContainer!.appendChild(calendarDay);
    }
  }

  getDaysInMonth(month: number, year: number): number {
    const isLeapYear = (year: number): boolean => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 ===0);
    };

    const daysInMonth = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month];
  }

  prevYear(): void {
    this.curr_year--;
    this.generateCalendar(this.curr_month, this.curr_year);
  }

  nextYear(): void {
    this.curr_year++;
    this.generateCalendar(this.curr_month, this.curr_year);
  }

  toggleDarkMode(): void {
    document.querySelector('body')!.classList.toggle('light');
    document.querySelector('body')!.classList.toggle('dark');
  }

  toggleMonthList(): void {
    this.isMonthListVisible = !this.isMonthListVisible;
  }

  selectMonth(monthIndex: number): void {
    this.curr_month = monthIndex;
    this.generateCalendar(this.curr_month, this.curr_year);
    this.isMonthListVisible = false;
  }
}
