import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day100() {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const showAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const leetCode = {
    name: '1693. Daily Leads and Partners',
    question: `<div><p>Table: <code>DailySales</code></p>

    <pre>+-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | date_id     | date    |
    | make_name   | varchar |
    | lead_id     | int     |
    | partner_id  | int     |
    +-------------+---------+
    This table does not have a primary key.
    This table contains the date and the name of the product sold and the IDs of the lead and partner it was sold to.
    The name consists of only lowercase English letters.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Write an SQL query that will, for each <code>date_id</code> and <code>make_name</code>, return the number of <strong>distinct</strong> <code>lead_id</code>'s and <strong>distinct</strong> <code>partner_id</code>'s.</p>
    
    <p>Return the result table in <strong>any order</strong>.</p>
    
    <p>The query result format is in the following example.</p>
    
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    
    <pre><strong>Input:</strong> 
    DailySales table:
    +-----------+-----------+---------+------------+
    | date_id   | make_name | lead_id | partner_id |
    +-----------+-----------+---------+------------+
    | 2020-12-8 | toyota    | 0       | 1          |
    | 2020-12-8 | toyota    | 1       | 0          |
    | 2020-12-8 | toyota    | 1       | 2          |
    | 2020-12-7 | toyota    | 0       | 2          |
    | 2020-12-7 | toyota    | 0       | 1          |
    | 2020-12-8 | honda     | 1       | 2          |
    | 2020-12-8 | honda     | 2       | 1          |
    | 2020-12-7 | honda     | 0       | 1          |
    | 2020-12-7 | honda     | 1       | 2          |
    | 2020-12-7 | honda     | 2       | 1          |
    +-----------+-----------+---------+------------+
    <strong>Output:</strong> 
    +-----------+-----------+--------------+-----------------+
    | date_id   | make_name | unique_leads | unique_partners |
    +-----------+-----------+--------------+-----------------+
    | 2020-12-8 | toyota    | 2            | 3               |
    | 2020-12-7 | toyota    | 1            | 2               |
    | 2020-12-8 | honda     | 2            | 2               |
    | 2020-12-7 | honda     | 3            | 2               |
    +-----------+-----------+--------------+-----------------+
    <strong>Explanation:</strong> 
    For 2020-12-8, toyota gets leads = [0, 1] and partners = [0, 1, 2] while honda gets leads = [1, 2] and partners = [1, 2].
    For 2020-12-7, toyota gets leads = [0] and partners = [1, 2] while honda gets leads = [0, 1, 2] and partners = [1, 2].
    </pre>
    </div>`,
    level: 'Easy',
  };

  return (
    <main>
      <Container className='w-80 h-75 justify-content-center position-relative'>
        <Row>
          <Col
            lg={6}
            style={
              toggleAnswer
                ? { overflowY: 'auto', maxHeight: '550px' }
                : { overflow: 'hidden', maxHeight: '550px' }
            }
          >
            <div className='code-container position-relative'>
              <Highlight className='language-javascript'>
                {`/* Write your PL/SQL query statement below */
SELECT TO_CHAR(date_id, 'YYYY-MM-DD') AS date_id, make_name, COUNT(DISTINCT lead_id) AS unique_leads, COUNT(DISTINCT partner_id) AS unique_partners
FROM DailySales
GROUP BY date_id, make_name;`}
              </Highlight>
              <div
                className={
                  'overlay position-absolute' +
                  (toggleAnswer ? '' : ' overlayBlur')
                }
              ></div>
            </div>
          </Col>
          <Col lg={6}>
            <section>
              <p>Day 100: Solving one of LeetCode problems</p>
              <p>
                <strong>{leetCode.name}</strong> Difficulty - {leetCode.level}
              </p>
              <p dangerouslySetInnerHTML={{ __html: leetCode.question }}></p>
              <Button variant='secondary' type='button' onClick={showAnswer}>
                {toggleAnswer ? 'Hide' : 'Show'} solution
              </Button>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
