function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours > 12) {
    const time = hours - 12;

    if (time < 10) {
      return `0${time}:${minutes} pm`;
    }
    return `${hours - 12}:${minutes} pm`;
  }
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours < 10) {
    return `0${hours}:${minutes} am`;
  }

  return `${time}: ${minutes} am`;
}

export { formatAs12HourClock };
