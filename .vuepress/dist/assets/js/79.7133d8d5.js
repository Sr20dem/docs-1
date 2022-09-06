(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{662:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"running-a-protocol-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-a-protocol-node"}},[e._v("#")]),e._v(" Running a protocol node")]),e._v(" "),o("p",[e._v("The Protocol-nodes are the backbone of a KYVE pool. They are responsible\nfor collecting data from a data source, bundling and uploading them to Arweave and verifying it. This enables KYVE\nto store any data stream decentralized and permanently.")]),e._v(" "),o("h3",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("Wallets")]),e._v(" "),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"https://keplr.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr"),o("OutboundLink")],1),e._v(" wallet with $KYVE. (You can claim some "),o("a",{attrs:{href:"https://app.kyve.network/faucet",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("An "),o("a",{attrs:{href:"https://arweave.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave"),o("OutboundLink")],1),e._v(" keyfile with some AR. (You can claim some "),o("a",{attrs:{href:"https://faucet.arweave.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("p",[e._v("Minimum hardware requirements")]),e._v(" "),o("ul",[o("li",[e._v("1vCPU")]),e._v(" "),o("li",[e._v("4GB RAM")]),e._v(" "),o("li",[e._v("1GB DISK")])]),e._v(" "),o("h3",{attrs:{id:"get-some-kyve"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-some-kyve"}},[e._v("#")]),e._v(" Get some $KYVE")]),e._v(" "),o("p",[e._v("Before continuing, make sure that you have the "),o("a",{attrs:{href:"https://keplr.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr"),o("OutboundLink")],1),e._v(" wallet installed in your browser. Head over to the "),o("a",{attrs:{href:"https://app.kyve.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("KYVE app"),o("OutboundLink")],1),e._v(" and make sure to connect your wallet (this automatically adds and switches to the KYVE network).")]),e._v(" "),o("p",[e._v("Go to the faucet tab and claim some tokens via one of three faucets. The wheel is the easiest option.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[o("strong",[e._v("IMPORTANT")]),e._v(": Make sure that you are on the correct app URL "),o("code",[e._v("https://app.kyve.network")])])]),e._v(" "),o("h3",{attrs:{id:"choose-a-pool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#choose-a-pool"}},[e._v("#")]),e._v(" Choose a pool")]),e._v(" "),o("p",[e._v("Before you can run a protocol node you have to choose a pool you want to join. You can find an overview of all pools\nin the KYVE app "),o("a",{attrs:{href:"https://app.kyve.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". Once you have chosen a pool you have to remember the pool id and the\npool runtime for later. You can find this information right below the pool name once you have clicked on a pool in the overview. In this example we have chosen the first pool with the pool id "),o("code",[e._v("0")]),e._v(" and the runtime "),o("code",[e._v("@kyve/evm")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"verify-that-you-can-claim-a-validator-slot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-you-can-claim-a-validator-slot"}},[e._v("#")]),e._v(" Verify that you can claim a validator slot")]),e._v(" "),o("p",[e._v("Due to a limited number of validator slots in each pool only the nodes with the highest stake can claim\na validator slot. You can only claim a validator slot if you have "),o("strong",[e._v("more than the minimum staking amount")]),e._v(".")]),e._v(" "),o("p",[e._v("To check the minimum staking amount you can click on the tab "),o("code",[e._v("Validators")]),e._v(" once you have selected a pool. There you should see something like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/minimum_stake.png",alt:"minimum stake"}})]),e._v(" "),o("p",[e._v("In this case all validator slots are occupied, but since the minimum staking amount is 300 $KYVE you just need to have more than 300 to claim a slot. If the minimum staking amount is zero you just have to have more than zero $KYVE.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[o("strong",[e._v("IMPORTANT")]),e._v(": If you don't have more $KYVE than the minimum staking amount you can not continue!")])]),e._v(" "),o("h3",{attrs:{id:"get-the-prebuilt-binaries-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-the-prebuilt-binaries-recommended"}},[e._v("#")]),e._v(" Get the prebuilt binaries (recommended)")]),e._v(" "),o("p",[e._v("For our case, the prebuilt binaries every operating system can be downloaded "),o("a",{attrs:{href:"https://github.com/KYVENetwork/evm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" for every operating system. For example on EVM it would be "),o("code",[e._v("evm-linux")]),e._v(", "),o("code",[e._v("evm-macos")]),e._v(", "),o("code",[e._v("evm-windows.exe")]),e._v(".")]),e._v(" "),o("p",[e._v("In general, you can get the binaries by clicking on the "),o("code",[e._v("Become a validator")]),e._v(" button and following the steps until you're on the section "),o("code",[e._v("Get node binaries")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/become_validator.png",alt:"become validator"}})]),e._v(" "),o("p",[e._v("Once you're there click the button "),o("code",[e._v("KYVE node")]),e._v(" which should lead you to the github repository.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/protocol_binaries.png",alt:"protocol binaries"}})]),e._v(" "),o("p",[e._v("Once you're on releases you can download the latest binary for your operating system. In our case we download the "),o("code",[e._v("evm-macos.zip")]),e._v(" and unzip it locally.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/protocol_binary_download.png",alt:"protocol binary download"}})]),e._v(" "),o("p",[e._v("When you have downloaded and unzipped the binary correctly you can proceed to "),o("RouterLink",{attrs:{to:"/intro/protocol-node.html#verify-that-your-binary-has-been-built-correctly"}},[e._v("how to verify your binary")])],1),e._v(" "),o("h3",{attrs:{id:"manually-build-the-binaries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manually-build-the-binaries"}},[e._v("#")]),e._v(" Manually build the binaries")]),e._v(" "),o("p",[e._v("Since we want to run a protocol node on a "),o("code",[e._v("@kyve/evm")]),e._v(" runtime pool we have to clone the correct repository. In our\ncase clone the "),o("a",{attrs:{href:"https://github.com/KYVENetwork/evm",target:"_blank",rel:"noopener noreferrer"}},[e._v("EVM repository"),o("OutboundLink")],1),e._v(" and make sure your are on branch "),o("code",[e._v("main")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9LWVZFTmV0d29yay9ldm0uZ2l0CmNkIGV2bQo="}}),e._v(" "),o("p",[e._v("Now run the following commands to install dependencies and build the binaries")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"eWFybiBpbnN0YWxsCnlhcm4gYnVpbGQ6YmluYXJpZXMK"}}),e._v(" "),o("p",[e._v("Once the binaries have been build you should see three binaries (one for every operating system) in the "),o("code",[e._v("out")]),e._v(" directory.")]),e._v(" "),o("h3",{attrs:{id:"verify-that-your-binary-has-been-built-correctly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-your-binary-has-been-built-correctly"}},[e._v("#")]),e._v(" Verify that your binary has been built correctly")]),e._v(" "),o("p",[e._v("Execute the binary using the following command to see the available options (example is on a MacOS machine)")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9ldm0tbWFjb3MgLS1oZWxwCg=="}}),e._v(" "),o("p",[e._v("If everything is set up correctly you should see the following")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"VXNhZ2U6IEBreXZlL2V2bSBbb3B0aW9uc10KCk9wdGlvbnM6CiAgLS1uYW1lICZsdDtzdHJpbmcmZ3Q7ICAgICAgICAgICAgICBUaGUgaWRlbnRpZmllciBuYW1lIG9mIHRoZSBub2RlLiBbb3B0aW9uYWwsIGRlZmF1bHQgPSBhdXRvIGdlbmVyYXRlZF0KICAtcCwgLS1wb29sSWQgJmx0O251bWJlciZndDsgICAgICAgIFRoZSBpZCBvZiB0aGUgcG9vbCB5b3Ugd2FudCB0byBydW4gb24uCiAgLW0sIC0tbW5lbW9uaWMgJmx0O3N0cmluZyZndDsgICAgICBZb3VyIG1uZW1vbmljIG9mIHlvdXIgYWNjb3VudC4KICAtaywgLS1rZXlmaWxlICZsdDtzdHJpbmcmZ3Q7ICAgICAgIFRoZSBwYXRoIHRvIHlvdXIgQXJ3ZWF2ZSBrZXlmaWxlLgogIC1zLCAtLWluaXRpYWxTdGFrZSAmbHQ7bnVtYmVyJmd0OyAgWW91ciBpbml0aWFsIHN0YWtlIHRoZSBub2RlIHNob3VsZCBzdGFydCB3aXRoLiBGbGFnIGlzIGlnbm9yZWQgbm9kZSBpcyBhbHJlYWR5IHN0YWtlZCBbdW5pdCA9ICRLWVZFXS4KICAtbiwgLS1uZXR3b3JrICZsdDtzdHJpbmcmZ3Q7ICAgICAgIFRoZSBjaGFpbiBpZCBvZiB0aGUgbmV0d29yay4gW29wdGlvbmFsLCBkZWZhdWx0ID0ga29yZWxsaWFdIChkZWZhdWx0OiAmcXVvdDthbHBoYSZxdW90OykKICAtc3AsIC0tc3BhY2UgJmx0O251bWJlciZndDsgICAgICAgIFRoZSBzaXplIG9mIGRpc2sgc3BhY2UgaW4gYnl0ZXMgdGhlIG5vZGUgaXMgYWxsb3dlZCB0byB1c2UuIFtvcHRpb25hbCwgZGVmYXVsdCA9IDEwMDAwMDAwMDAgKDEgR0IpXSAoZGVmYXVsdDogJnF1b3Q7MTAwMDAwMDAwMCZxdW90OykKICAtYiwgLS1iYXRjaFNpemUgJmx0O251bWJlciZndDsgICAgIFRoZSBiYXRjaCBzaXplIG9mIGZldGNoaW5nIGl0ZW1zIGZyb20gZGF0YXNvdXJjZS4gRm9yIHN5bmNocm9ub3VzIGZldGNoaW5nIGVudGVyIDEuIFtvcHRpb25hbCwgZGVmYXVsdCA9IDFdCiAgLS1tZXRyaWNzICAgICAgICAgICAgICAgICAgICBSdW4gUHJvbWV0aGV1cyBtZXRyaWNzIHNlcnZlci4gW29wdGlvbmFsLCBkZWZhdWx0ID0gZmFsc2VdIChkZWZhdWx0OiBmYWxzZSkKICAtdiwgLS12ZXJib3NlICAgICAgICAgICAgICAgIFJ1biBub2RlIGluIHZlcmJvc2UgbW9kZS4gW29wdGlvbmFsLCBkZWZhdWx0ID0gZmFsc2VdIChkZWZhdWx0OiBmYWxzZSkKICAtLXZlcnNpb24gICAgICAgICAgICAgICAgICAgIG91dHB1dCB0aGUgdmVyc2lvbiBudW1iZXIKICAtaCwgLS1oZWxwICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgaGVscCBmb3IgY29tbWFuZAo="}}),e._v(" "),o("h3",{attrs:{id:"start-your-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-your-node"}},[e._v("#")]),e._v(" Start your node")]),e._v(" "),o("p",[e._v("To run your node, copy your Arweave keyfile into your working directory and fetch the mnemonic from Keplr.\nHere it is important that you enter the correct "),o("code",[e._v("--poolId")]),e._v(", your "),o("code",[e._v("--mnemonic")]),e._v(" and your desired "),o("code",[e._v("--initialStake")]),e._v(".\nIn our case, we initially stake 10,000 $KYVE to ensure that we get a validator slot.")]),e._v(" "),o("p",[e._v("Run the following command with the same binary as above")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9ldm0tbWFjb3MgLS1wb29sSWQgMCAtLW1uZW1vbmljICZxdW90O3lvdXIgbW5lbW9uaWMgaW4gaGVyZSAuLi4mcXVvdDsgLS1pbml0aWFsU3Rha2UgMTAwMDAgLS1rZXlmaWxlIC4vYXJ3ZWF2ZS5qc29uIC0tbmV0d29yayBrb3JlbGxpYQo="}}),e._v(" "),o("p",[e._v("If your node has started correctly, it should print some logs like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"MjAyMi0wNC0wNyAxNDo0MzoxOC42NzMgIElORk8gIFN0YXJ0aW5nIG5vZGUgLi4uCgoyMDIyLTA0LTA3IDE0OjQzOjE4LjY3NiAgSU5GTyAgTmFtZSAgICAgICAgICAgICAgID0gY3V0ZS1tYXJvb24tcGlubmlwZWQKMjAyMi0wNC0wNyAxNDo0MzoxOC43MzYgIElORk8gIEFkZHJlc3MgICAgICAgICAgICA9IGt5dmUxenBtZXR2cWdldWg2dWE0cTVjbmFqYXk2dTR1aHV1dm5qdDg1bTcKMjAyMi0wNC0wNyAxNDo0MzoxOC43MzcgIElORk8gIFBvb2wgSWQgICAgICAgICAgICA9IDAKMjAyMi0wNC0wNyAxNDo0MzoxOC43MzcgIElORk8gIEBreXZlL2NvcmUgICAgICAgICA9IHYxLjAuMgoyMDIyLTA0LTA3IDE0OjQzOjE4LjczOCAgSU5GTyAgQGt5dmUvZXZtICAgICAgICAgID0gdjEuMC4xCgoyMDIyLTA0LTA3IDE0OjQzOjE4LjczOSAgREVCVUcgQXR0ZW1wdGluZyB0byBmZXRjaCBwb29sIHN0YXRlLgoyMDIyLTA0LTA3IDE0OjQzOjE5LjA1OSAgSU5GTyAgUnVubmluZyBub2RlIG9uIHJ1bnRpbWUgQGt5dmUvZXZtLgoyMDIyLTA0LTA3IDE0OjQzOjE5LjA2NCAgSU5GTyAgUG9vbCB2ZXJzaW9uIHJlcXVpcmVtZW50cyBtZXQKMjAyMi0wNC0wNyAxNDo0MzoxOS4wNjYgIElORk8gIEZldGNoZWQgcG9vbCBzdGF0ZQoyMDIyLTA0LTA3IDE0OjQzOjE5LjE3MiAgREVCVUcgU3Rha2luZyAxMDAuMDAwMCAkS1lWRSAuLi4KMjAyMi0wNC0wNyAxNDo0MzoxOS44ODMgIERFQlVHIFRyYW5zYWN0aW9uID0gRkExMDFCNDE4NzMxMjlEMTY5Mzc5NDdFRDE0NjBGNDhBOEVGRDY5M0I5Q0Q3RjEyRTY1RjIyMUI1QjdDOTU1NgoyMDIyLTA0LTA3IDE0OjQzOjI2LjI0MyAgSU5GTyAgU3VjY2Vzc2Z1bGx5IHN0YWtlZCAxMDAuMDAwMCAkS1lWRQoyMDIyLTA0LTA3IDE0OjQzOjI2LjI0NiAgSU5GTyAgUnVubmluZyBub2RlIHdpdGggYSBzdGFrZSBvZiAxMDAuMDAwMCAkS1lWRQoKMjAyMi0wNC0wNyAxNDo0MzoyNi4yNDcgIElORk8gIEpvaW5pbmcgS1lWRSBuZXR3b3JrIC4uLgoKMjAyMi0wNC0wNyAxNDo0MzoyNi4zNzAgIERFQlVHIEF0dGVtcHRpbmcgdG8gdmVyaWZ5IG5vZGUuCjIwMjItMDQtMDcgMTQ6NDM6MjYuMzcxICBJTkZPICBOb2RlIGlzIHJ1bm5pbmcgYXMgYSB2YWxpZGF0b3IuCgoyMDIyLTA0LTA3IDE0OjQzOjI2LjM3NCAgSU5GTyAgU3RhcnRpbmcgbmV3IHByb3Bvc2FsCjIwMjItMDQtMDcgMTQ6NDM6MjYuMzc3ICBJTkZPICBDYWNoZWQgdG8gaGVpZ2h0ID0gMAoyMDIyLTA0LTA3IDE0OjQzOjI2LjQ4OSAgSU5GTyAgU2VsZWN0ZWQgYXMgVkFMSURBVE9SCjIwMjItMDQtMDcgMTQ6NDM6MjYuNjA4ICBJTkZPICBWYWxpZGF0aW5nIGJ1bmRsZSBzWU53cjFCdHRLX1dtSWtqWEpJTGpqY242MElIU1g2NFFwQnFpMmZDeXVVCjIwMjItMDQtMDcgMTQ6NDM6MjYuNzc2ICBERUJVRyBEb3dubG9hZGluZyBidW5kbGUgZnJvbSBBcndlYXZlIC4uLgoyMDIyLTA0LTA3IDE0OjQzOjI3LjY0OCAgREVCVUcgU3VjY2Vzc2Z1bGx5IGRvd25sb2FkZWQgYnVuZGxlIGZyb20gQXJ3ZWF2ZQoKLi4uCg=="}}),e._v(" "),o("h3",{attrs:{id:"verify-node-stake"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-node-stake"}},[e._v("#")]),e._v(" Verify node stake")]),e._v(" "),o("p",[e._v("When you look at your node logs you should then see that the node is starting to verify bundles.")]),e._v(" "),o("p",[e._v("After you have successfully staked you should see your address in the Pool validators table.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/verify_stake.png",alt:"verify stake"}})]),e._v(" "),o("p",[e._v("Also, you can now manage your stake through the app under "),o("code",[e._v("Manage stake")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
