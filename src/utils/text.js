export const grader = (temp) => `${temp} °C`;

export const copyright = (namn) => `© ${new Date().getFullYear()} ${namn}`;

// Välj hälsning efter aktuell timme: natt 0–5, morgon 6–9, dag 10–17, kväll 18–23.
export const halsning = () => {
  const timme = new Date().getHours();

  if (timme < 6) {
    return "God natt";
  } else if (timme < 10) {
    return "God morgon";
  } else if (timme < 18) {
    return "Hej";
  } else {
    return "God kväll";
  }
};
