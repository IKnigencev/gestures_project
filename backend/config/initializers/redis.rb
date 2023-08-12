$redis = Redis.new(host: "localhost", port: ENV.fetch('REDIS_PORT', 6379))
