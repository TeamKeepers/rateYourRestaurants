import styled from "styled-components";

export default styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    margin: 0 auto;
    padding-top: 100px;
    h2 {
        border-bottom: solid 3px #e47d31;
        height: 40px;
        padding: 0 10px;
        font-weight: bold;
        color: #4c4c4c;
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 75px; 
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
          width: 200px;
          height: 55px;
          border-radius: 28px;
          font-family: Helvetica;
          font-size: 20px;
          text-align: center;
          color: #ffffff;
          background-color: #e47d31;
          border: 0px;
          margin-top: 30px;
      }
      
      input {
          width: 340px;
          height: 52px;
          border-radius: 3px;
          border: solid 1px #ebebeb;
          background-color: #ffffff;
          padding: 10px;
          margin: 5px;
          box-sizing: border-box;
      }
      span {
        color: red;
        padding-top: 3px;
      }
    }
`;