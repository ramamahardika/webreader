// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id: 'jarvis',
		title: 'Read this for me 🤖',
		contexts: ['selection']
	});
});

chrome.runtime.onMessage.addListener(function(request) {
	if (request.toSay === '' || request.toSay === undefined) return chrome.tts.speak('Oh no. Empty', { rate: 0.8 });
	chrome.tts.speak(request.toSay, { rate: 0.8 });
});

chrome.contextMenus.onClicked.addListener(function(request) {
	chrome.tts.speak(request.selectionText, { rate: 0.8 });
});
