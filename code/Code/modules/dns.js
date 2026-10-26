const dns = require("dns");

dns.lookup("google.com", (error, address, family) => {
    if (error) {
        console.log("Error:", error);
        return;
    }

    console.log("IP Address:", address);
    console.log("IP Version:", family);
});