const cluster = require("cluster");
const os = require("os");
require("newrelic");

const runExpressServer = require("./server");

// Check if current process is master.
if (cluster.isMaster) {
	// Get total CPU cores.
	let cpuCount;
    cpuCount = os.cpus().length;
	console.log(cpuCount);
	// Spawn a worker for every core.
	for (let j = 0; j < cpuCount; j++) {
		cluster.fork();
	}
} else {
	// This is not the master process, so we spawn the express server.
	runExpressServer();
}

// Cluster API has a variety of events.
// Here we are creating a new process if a worker die.
cluster.on("exit", function (worker) {
	console.log(`Worker ${worker.id} died'`);
	console.log(`Staring a new one...`);
	cluster.fork();
});