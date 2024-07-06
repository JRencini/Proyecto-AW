export const ingresosConst = (fecha, desc) => {

  return `
    <li class="list-group-item">
                  <p class="text-secondary">${fecha}</p>
                  ${desc}
                </li>`;
};
