class Configuration {
    static get Database() {
        return {
            type: "postgres",
            host: "localhost",
            port: 5432,
            database: "FlaggedRepoAPI",
            synchronize: true,
            username: "postgres",
            password: "123"
        };
    }
}
module.exports = Configuration;
