import React, { Component } from "react";
import dateFns from "date-fns";
import styled from "styled-components";

const StyledCalendar = styled.div`
  margin-bottom: 2rem;
  /* VARIABLES */

  :root {
    --main-color: #1a8fff;
    --text-color: #777;
    --text-color-light: #ccc;
    --border-color: #eee;
    --bg-color: #f9f9f9;
    --neutral-color: #fff;
  }

  /* GENERAL */

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
    color: var(--text-color);
    background: var(--bg-color);
    position: relative;
  }

  header {
    display: block;
    width: 100%;
    padding: 1.75em 0;
    border-bottom: 1px solid var(--border-color);
    background: var(--neutral-color);
  }

  header #logo {
    font-size: 175%;
    text-align: center;
    color: var(--main-color);
    line-height: 1;
  }

  header #logo .icon {
    padding-right: 0.25em;
  }

  main {
    display: block;
    margin: 0 auto;
    margin-top: 5em;
    max-width: 50em;
  }

  /* GRID */

  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .row-middle {
    align-items: center;
  }

  .col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-start {
    justify-content: flex-start;
    text-align: left;
  }

  .col-center {
    justify-content: center;
    text-align: center;
  }

  .col-end {
    justify-content: flex-end;
    text-align: right;
  }

  /* Calendar */

  .calendar {
    display: block;
    position: relative;
    width: 100%;
    background: var(--neutral-color);
    border: 1px solid var(--border-color);
  }

  .calendar .header {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 1.5em 0;
    border-bottom: 1px solid var(--border-color);
  }

  .calendar .header .icon {
    cursor: pointer;
    transition: 0.15s ease-out;
  }

  .calendar .header .icon:hover {
    transform: scale(1.75);
    transition: 0.25s ease-out;
    color: var(--main-color);
  }

  .calendar .header .icon:first-of-type {
    margin-left: 1em;
  }

  .calendar .header .icon:last-of-type {
    margin-right: 1em;
  }

  .calendar .days {
    text-transform: uppercase;
    font-weight: 400;
    color: var(--text-color-light);
    font-size: 70%;
    padding: 0.75em 0;
    border-bottom: 1px solid var(--border-color);
  }

  .calendar .body .cell {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    position: relative;
    height: 5em;
    border-right: 1px solid var(--border-color);
    overflow: hidden;
    cursor: pointer;
    background: var(--neutral-color);
    transition: 0.25s ease-out;
  }

  .calendar .body .cell:hover {
    background: var(--bg-color);
    transition: 0.5s ease-out;
  }

  .calendar .body .selected {
    border-left: 10px solid transparent;
    border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);
    border-image-slice: 1;
  }

  .calendar .body .row {
    border-bottom: 1px solid var(--border-color);
  }

  .calendar .body .row:last-child {
    border-bottom: none;
  }

  .calendar .body .cell:last-child {
    border-right: none;
  }

  /* Date Numbers */
  .calendar .body .cell .number {
    position: absolute;
    font-size: 82.5%;
    line-height: 1;
    top: 0.75em;
    right: 0.75em;
    font-weight: 700;
    color: #333;
  }

  .calendar .body .disabled {
    color: var(--text-color-light);
    pointer-events: none;
  }

  .calendar .body .cell .bg {
    font-weight: 700;
    line-height: 1;
    color: var(--main-color);
    opacity: 0;
    font-size: 8em;
    position: absolute;
    top: -0.2em;
    right: -0.05em;
    transition: 0.25s ease-out;
    letter-spacing: -0.07em;
  }

  .calendar .body .cell:hover .bg,
  .calendar .body .selected .bg {
    opacity: 0.05;
    transition: 0.5s ease-in;
  }

  .calendar .body .col {
    flex-grow: 0;
    flex-basis: calc(100% / 7);
    width: calc(100% / 7);
  }

  .calendar .body .cell .habit {
    justify-self: flex-end;
    align-self: flex-end;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
  }
  .calendar .body .cell .habit.habit1 {
    background: red;
  }
  .calendar .body .cell .habit.habit2 {
    background: dodgerblue;
  }
  .calendar .body .cell .habit.habit5 {
    background: limegreen;
  }
`;

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      currentMonth: new Date(),
      selectedDate: new Date(),
    };
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            {"<"}
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">{">"}</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell`}
            key={day}
            // onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <div className="habit habit1" />
            <div className="habit habit2" />
            <div className="habit habit3" />
            <div className="habit habit4" />
            <div className="habit habit5" />
            <div className="habit habit6" />
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  // onDateClick = day => {
  //   this.setState({
  //     selectedDate: day,
  //   });
  // };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <StyledCalendar>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </StyledCalendar>
    );
  }
}
