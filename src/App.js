import s from "./App.module.css";

export default function App() {
  let arr = [
    { price: 100, size: 200 },
    { price: 200, size: 85 },
    { price: 300, size: 200 },
    { price: 400, size: 150 },
    { price: 500, size: 200 },
  ];
  let arr2 = [
    { price: 100, size: 200 },
    { price: 250, size: 200 },
    { price: 270, size: 100 },
    { price: 350, size: 95 },
    { price: 485, size: 200 },
  ];

  let total = 0;
  let total2 = 0;

  return (
    <>
      <h2 className={s.title}>Order Book</h2>
      <div className={s.table}>
        <div className={s.general}>
          <table>
            <thead>
              <tr>
                <th>TOTAL</th>
                <th>SIZE</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((a, idx) => {
                total += a.size;
                const wD = total / 10;
                return (
                  <div key={idx} className={s.bar2} style={{ width: wD }}>
                    <tr className={s.tr2}>
                      <td>{total}</td>
                      <td>{a.size}</td>
                      <td className={s.gPrice}>{a.price}</td>
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={s.general2}>
          <table>
            <thead>
              <tr>
                <th>PRICE</th>
                <th>SIZE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {arr2.map((a, idx) => {
                total2 += a.size;
                const wD = total2 / 10;

                return (
                  <div key={idx} className={s.bar3} style={{ width: wD }}>
                    <tr className={s.tr3}>
                      <td className={s.rPrice}>{a.price}</td>
                      <td>{a.size}</td>
                      <td>{total2}</td>
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={s.btnCont}>
        <button className={s.toggle} type="button">
          Toggle Feed
        </button>
        <button className={s.kill} type="button">
          Kill Feed
        </button>
      </div>
    </>
  );
}
