import Counter from "../Counter/Counter";
import data from "../../db.json";

function Main() {
  console.log(data.quiz);

  return (
    <section className="main-container">
      <Counter />
      {data.quiz.map((quiz) => {
        return (
          <div>
            <h1>{quiz.question}</h1>
            {
              quiz.options.map((answer) => {
                return (
                  <div>
                    <p>{answer}</p>
                  </div>
                );
              }
              )
            }
          </div>
        );
      })}
    </section>
  );
}

export default Main;
