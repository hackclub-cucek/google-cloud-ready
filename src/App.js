import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import CloudData from './Data/students.json';
import ProgressBar from './Components/progressBar';
import Header from './Components/Header';
import Swag from './images/swag.png';


function findPercentage(nQ, nS) {
  var m0 = 0,
    m1 = 0,
    m2 = 0,
    m3 = 0
  if (nQ <= 8) {
    m0 = nQ
  } else if (nQ > 8 && nQ <= 16) {
    m0 = 8
    m1 = nQ - 8
  } else if (nQ > 16 && nQ <= 24) {
    m0 = 8
    m1 = 8
    m2 = nQ - 16
  } else {
    m0 = 8
    m1 = 8
    m2 = 8
    m3 = nQ - 24
  }

  var n0 = 0,
    n1 = 0,
    n2 = 0,
    n3 = 0

  if (nS <= 4) {
    n0 = nS
  } else if (nS > 4 && nS <= 8) {
    n0 = 4
    n1 = nS - 4
  } else if (nS > 8 && nS <= 12) {
    n0 = 4
    n1 = 4
    n2 = nS - 8
  } else {
    n0 = 4
    n1 = 4
    n2 = 4
    n3 = nS - 12
  }
  var mile_1 = m0 * 6.25
  var mile_2 = m1 * 6.25
  var mile_3 = m2 * 6.25
  var mile_4 = m3 * 8.33

  var finalMile_1 = Math.round(mile_1 + n0 * 12.5)
  var finalMile_2 = Math.round(mile_2 + n1 * 12.5)
  var finalMile_3 = Math.round(mile_3 + n2 * 12.5)
  var finalMile_4 = Math.round(mile_4 + n3 * 16.7)

  var results = []
  results.push(finalMile_1)
  results.push(finalMile_2)
  results.push(finalMile_3)
  results.push(finalMile_4)
  return results
}

var finished = []

function App() {
  const [searchTerm, setSearchTerm] = useState("")


  return (
    <DivContainer className="App">
      <Header />
      <br />
      <br />
      <SearchSection>
        <SearchForm>
          <SearchInput
            type="text"
            placeholder="Search with Email"
            onChange={event => {
              setSearchTerm(event.target.value)
            }}
          />
        </SearchForm>
      </SearchSection>
      {
        CloudData.filter(CloudDetail => {
          if (searchTerm == CloudDetail.Student_Email) {
            return CloudDetail
          }
        }).map((CloudDetail, index) => {
          finished = findPercentage(
            CloudDetail.Quests_Completed,
            CloudDetail.Skill_Badges_Completed
          )
          return (
            <CardContainer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 10,
              }}
              className="Card"
            >
              <CardDiv index={index}
                style={{
                  backgroundColor: '#8E54E9'
                }}
              >
                <div className="user-info">
                  <CardH2>
                    <a
                      href={`${CloudDetail.Qwiklabs_Profile_URL}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <b>{CloudDetail.Student_Name}</b>
                    </a>
                  </CardH2>
                  <Cardul>
                    <Cardli>
                      {CloudDetail.Quests_Completed}
                      <Cardstrong>Quests Completed</Cardstrong>
                    </Cardli>
                    <Cardli>
                      {CloudDetail.Skill_Badges_Completed}
                      <Cardstrong>Skill Badges Completed</Cardstrong>
                    </Cardli>
                  </Cardul>
                  <CardH5>Milestone #1- Complete any 8 quests & 4 skill badges</CardH5>
                  <ProgressBar completed={finished[0]} bigcolor="#4285f4" />
                  <CardH5>Milestone #2- Complete any 16 quests & 8 skill badges</CardH5>
                  <ProgressBar completed={finished[1]} bigcolor="#fbbc05" />
                  <CardH5>Milestone #3- Complete any 24 quests & 12 skill badges</CardH5>
                  <ProgressBar completed={finished[2]} bigcolor="#34a853" />
                  <CardH5>Milestone #4- Complete any 30 quests & 15 skill badges</CardH5>
                  <ProgressBar completed={finished[3]} bigcolor="#ea4335" />
                </div>
              </CardDiv>
            </CardContainer>
          )
        })
      }

      <PersonDiv>
        <center><h1>Ultimate Milestone Achievers</h1></center>
        <PersonTable>
          <tr>
            <PersonTh>Keshav Jain</PersonTh>
            <PersonTh>Tinu Francis</PersonTh>
            <PersonTh>Gladson T Lalu</PersonTh>
          </tr>
          <tr>
            <PersonTh>Shradha Shejil</PersonTh>
            <PersonTh>Liya Elsa Benny</PersonTh>
            <PersonTh>Rishab P Haridas</PersonTh>
          </tr>
          <tr>
            <PersonTh>Shakeer Hussain S</PersonTh>
            <PersonTh>Dheeraj R</PersonTh>
            <PersonTh>Binil Biju</PersonTh>
          </tr>
          <tr>
            <PersonTh>shamjith saji</PersonTh>
            <PersonTh>Akshay Joseph</PersonTh>
            <PersonTh>Hrishikesh Mahadev Gawas</PersonTh>
          </tr>
          <tr>
            <PersonTh>Joseph Pious</PersonTh>
            <PersonTh>Siddhanth Andani</PersonTh>
            <PersonTh>Deepak Mohan Sawant</PersonTh>
          </tr>
          <tr>
            <PersonTh>Om Gupta</PersonTh>
            <PersonTh>Neena Maria M Jojo</PersonTh>
            <PersonTh>Aswin N Kaimal</PersonTh>
          </tr>
          <tr>
            <PersonTh>Suman Garai</PersonTh>
            <PersonTh>Alan Joseph Shaji</PersonTh>
            <PersonTh>Jinil Jiju</PersonTh>
          </tr>
          <tr>
            <PersonTh>M J Gopikrishna</PersonTh>

            <PersonTh>Joseph George</PersonTh>
            <PersonTh>Alex Joseph</PersonTh>
          </tr>
          <tr>
            <PersonTh>Akshay Vinod</PersonTh>
            <PersonTh>Pooja Agrawal</PersonTh>
            <PersonTh>Ajay Mathew</PersonTh>
          </tr>
          <tr>
            <PersonTh>Santript Mehta</PersonTh>
            <PersonTh>Munish Kumar</PersonTh>
            <PersonTh>Mahshooq Zubair</PersonTh>
          </tr>
          <tr>
            <PersonTh>Gopika s</PersonTh>
            <PersonTh>Safwan k</PersonTh>
            <PersonTh>Harsh</PersonTh>
          </tr>
          <tr>
            <PersonTh>Salman Faris P P</PersonTh>
            <PersonTh>Nisha A</PersonTh>
            <PersonTh>Sreya S Raj</PersonTh>
          </tr>
          <tr>
            <PersonTh>Jishnu</PersonTh>
            <PersonTh>Ahamed Favas</PersonTh>
            <PersonTh>Sona Simon</PersonTh>
          </tr>
          <tr>
            <PersonTh>TV Vrinda</PersonTh>
            <PersonTh>Rehan Thomas</PersonTh>
            <PersonTh>Justin Antony</PersonTh>
          </tr>
          <tr>
            <PersonTh>Subhrajeet Shee</PersonTh>
            <PersonTh>Ananthu Unni P</PersonTh>
          </tr>
        </PersonTable>
      </PersonDiv>
      <br />
      <br />
      <br />
      <br />
      <br />
      <SwagDiv>
        <h1>Ultimate Milestone: Complete 30 Quests & all 15 Skill Badges</h1>
        <SwagImg src={Swag} alt='swag' />
        <SwagH2>
          <ol>
            <li>T-Shirt</li>
            <li>Laptop Bag</li>
            <li>Sling Bag</li>
            <li>Pen</li>
            <li>Badge</li>
            <li>Stickers</li>
            <li>Career Readiness Program</li>
          </ol>
        </SwagH2>
      </SwagDiv>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>
        Thanks For Your Support and Dedication 💟
      </h4>
      <br />
      <br />
      <br />
    </DivContainer>


  );
}

const SwagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;

const SwagH2 = styled.h2`
  margin-left: 7%;
`;

const SwagImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const DivContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
`;

const PersonTable = styled.table`
  width: 100%;
  /* border: 1px solid white;
  border-collapse: collapse; */
`;
const PersonTh = styled.th`
  /* border: 1px solid white;
  border-collapse: collapse; */
  padding: 15px;
  text-align: left;
  text-transform: capitalize;
`;
const PersonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-image: linear-gradient(#531CB3, #944BBB);
`;

const SearchSection = styled.section`
    height: 100px;
`;

const SearchForm = styled.form`

`;

const SearchInput = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  outline: none;
`;

export const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;


export const CardH1 = styled.h1`
    color: #fff;
`;

export const CardH5 = styled.h5`
  color: #fff;
  font-family: inherit;
  font-size: small;
  margin: 0;
`;

export const CardDiv = styled.div`
  display: flex;
  max-width: 500px;
  border-radius: 15px;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`;

export const CardInput = styled.input`
  border-radius: 15px;
  width: 20rem;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const CardH2 = styled.h2`
  color: #fff;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  text-align: center;
  justify-content: center;
`;

export const Cardul = styled.ul`
  color: #fff;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
  max-width: 380px;
`;

export const Cardli = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.2rem;
`;

export const Cardstrong = styled.strong`
  font-size: 0.8rem;
  margin-left: 2rem;
  margin-right: 1rem;
`;


export default App;
