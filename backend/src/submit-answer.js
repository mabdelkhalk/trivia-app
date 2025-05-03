// Lambda function to submit answer
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ correct: true })
  };
};