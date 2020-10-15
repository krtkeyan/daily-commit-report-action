
export const createMessageBlock = (params) => {

    const authorList = Object.keys(params);
    const topper = authorList[0];
    const today = new Date().toLocaleDateString("en-IN", {day:'numeric',month:'short',timeZone: 'Asia/Calcutta'})
    const displayMessage = authorList.reduce((arr, author)=>{
      const commitCount = params[author];
      const generatedStars = '✨'.repeat(commitCount);
      return arr + `${author} ${generatedStars} - ${commitCount} \n`;
    },'').trim();

    return [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `🚀 *${today} - Leaderboard*`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `>>>${displayMessage}`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text":  `_Congratulations, ${topper} on topping leaderboard_ 🥳 🎉`
        }
      }
      ]
}