import React from 'react';
import ReactDOM from 'react-dom';
import AuthQuiz from './AuthQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const state = {
  turnData: {
    books: ['Roughing It', 'IT', 'A Tale of Two Cities', 'The Shining'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/mark.jpg',
      imageSource: 'baike',
      books: ['The adventures of Huckleberry Finn',
              'Life on the Mississippi',
              'Roughing It'
          ]
    }
  },
  highlight: 'none'
}

describe("Author Quiz", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthQuiz {...state} onAnswerSelected={()=>{}}/>, div);
  });

  describe("when no answer is selected", () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount(<AuthQuiz {...state} onAnswerSelected={()=>{}}/>);
    })
    
    it("no backgroud color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
    })
  });

  describe("when wrong answer is selected", () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount(
      <AuthQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}}/>);
    })
    
    it("red backgroud color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("red");
    })
  });

  describe("when correct answer is selected", () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount(
      <AuthQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}}/>);
    })
    
    it("green backgroud color", ()=>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("green");
    })
  });

  describe("when user select first answer", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(()=>{
      wrapper = mount(
      <AuthQuiz {...state} onAnswerSelected={handleAnswerSelected}/>);
      wrapper.find('.answer').first().simulate('click');

    })
    
    it("onAnswerSelected should be called", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalled();
    })

    it("selected should be Roughing It", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalledWith("Roughing It");
    })
  });


})
