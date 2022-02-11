import { Pool } from 'pg';

const connectionString = 'postgres://plchcoqy:VvXy-QHBzpV3pMbG38W1eT7gU-_Hgo7e@kesavan.db.elephantsql.com/plchcoqy';

const db = new Pool({connectionString});

export default db;