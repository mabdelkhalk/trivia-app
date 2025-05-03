// Lambda function to fetch questions
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ questions: [] })
  };
};