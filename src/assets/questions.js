
import fire from "../firebase/firebase.util";

const Home =  () => {
  const q = [];

  const fetchQuestions = async () => {
    const response = fire.firestore().collection("quizQuestions1");
    const data = await response.get();
    data.docs.forEach((item) => {
      q.push(item.data());
    });
  };
  fetchQuestions();
  return q;
};
const Questions = Home();

export default Questions;
