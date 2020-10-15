import Faunadb, { query as q } from "faunadb";
const client = new Faunadb.Client({ secret: FAUNADB_SECRET });

const incrementCommitCountByUser = async ({id, count}) => {
    try{
        const userInfo = await client.query(
            q.Get(q.Ref(q.Collection('users'), id))
        );
        const newCount = userInfo.github.commitCount + count;
    
        await client.query(
            q.Update(
              q.Ref(q.Collection('users'), id),
              { github: { commitCount: newCount } },
            )
          )
    }catch(err){
        console.error('Increment Commit', err);
    }
};

const getCommitsForUsers = async () => {
    try{
        return await client.query(
            q.Map(
                q.Paginate(Documents(Collection('users'))),
                q.Lambda(x => q.Get(x)),
                (r) => ({
                    [r]: q.Select(['github','commitCount',q.Get(r)])
                })
            )
        );     
    }catch(err){
        console.error('Get Commits List', err);
    }
}