import { createMessageBlock } from '../utils/slack';
import Router from "../utils/router";

const checkLeaderboard = async (params) => {
    
    const parseCSVToObj = params.split(',')
                            .reduce(
                                (acc,val) => { 
                                    const [ _, author, commit] = val.match(/([\w\s]+)\s(\d+)/); 
                                    return { ...acc,[author.toUpperCase()]:commit } 
                                },{}
                            );
    const sortedObj = Object.entries(parseCSVToObj).sort((a,b) => b[1]-a[1]).reduce((acc,[author,commit])=>({...acc,[author]:commit}),{})
    await fetch(SLACK_WEBHOOK_URL, {
            body: JSON.stringify({ blocks: createMessageBlock(sortedObj) }),
            method: "POST",
            headers: { "Content-Type": "application/json" },
    });
};

export default async (request) => {
    const body = await request.text();

    const r = new Router();
    r.post("/leaderboard", () => checkLeaderboard(body));

    let response = await r.route(request)

    if (!response) {
        response = new Response("Not found", { status: 404 })
    }

    return new Response("OK");
};