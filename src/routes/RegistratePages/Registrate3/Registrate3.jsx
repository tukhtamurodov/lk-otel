import React from "react";
import edit from "./../../../assets/icons/edit.svg";
import trash from "./../../../assets/icons/trash.svg";
import "./Registrate3.scss";
import MyButton from "../../../components/MyButton/MyButton";
import AddNumber from "../components/AddNumber/AddNumber";
function Registrate3() {
  return (
    <div className="registr-3 table">
      <AddNumber />
      <div className="row">
        <div className="table__title">Номера и цены </div>
        <div className="table__title-right">
          <div className="table__all-nums">
            Всего номеров: <strong>20</strong>
          </div>
          <button className="table__add-btn">Добавить номер</button>
        </div>
      </div>
      <div className="table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Тип номера</th>
              <th>Количество номеров</th>
              <th>Вместимость</th>
              <th>Размер номера</th>
              <th>Цена за ночь</th>
              <th>Сообщения от PetsInn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Supreme Bear Hotel</td>
              <td>3</td>
              <td>6</td>
              <td>1.4</td>
              <td>200</td>
              <td>
                <div className="table__btns">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table__pagination">
        <button className="table__pag active">1</button>
        <button className="table__pag">2</button>
        <button className="table__pag">3</button>
        <button className="table__pag">4</button>
        <button className="table__pag">...</button>
        <button className="table__pag">10</button>
      </div>
      <div className="table__btn-next">
        <MyButton>Далее </MyButton>
      </div>
    </div>
  );
}

export default Registrate3;
