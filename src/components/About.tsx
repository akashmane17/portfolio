import React from "react";

interface AboutProps {
  statements: {
    input: string;
    return: string;
  }[];
}

const About: React.FC<AboutProps> = ({ statements }) => {
  return (
    <div className="about-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="header-button red" />
          <div className="header-button yellow" />
          <div className="header-button green" />
        </div>
        <div className="terminal-window">
          <Statements statements={statements} />
        </div>
      </div>
    </div>
  );
};

interface StatementsProps {
  statements: {
    input: string;
    return: string;
  }[];
}

const Statements: React.FC<StatementsProps> = ({ statements }) => {
  return (
    <div>
      {statements.map((statement, index) => (
        <Statement statement={statement} key={index} />
      ))}
      <div className="statement">
        <div className="input-statement">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

interface StatementProps {
  statement: {
    input: string;
    return: string;
  };
}

const Statement: React.FC<StatementProps> = ({ statement }) => {
  return (
    <div className="statement">
      <div className="input-statement">{statement.input}</div>
      <div
        className="return-statement"
        dangerouslySetInnerHTML={{ __html: statement.return }}
      />
    </div>
  );
};

export default About;
