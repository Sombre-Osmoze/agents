/*
 * KDE notification plugin for OpenCode
 */

export const NotificationPlugin = async ({ client, $ }) => {
  let lastMessage: { messageID: string | null; text: string | null } = {
    messageID: null,
    text: null,
  };

  return {
    event: async ({ event }) => {
      // Save message text for idle summary
      if (event.type === "message.part.updated") {
        if (event.properties.part.type === "text") {
          const { messageID, text } = event.properties.part;
          lastMessage = { messageID, text };
        }
      }

      if (event.type === "session.idle") {
        const summary = getIdleSummary(lastMessage?.text) ?? "Idle";
        
        // Use kdialog for KDE native notifications
        await $`kdialog --title "OpenCode" --passivepopup ${summary} 5`;
      }
    },
  };
};

/**
 * Extract a last `*Summary:* ...` line at the end of the text
 */
function getIdleSummary(text: string | null) {
  if (!text) return;
  const idleMatch = text.match(/[_\*]Summary:[_\*]? (.*)[_\*]?$/m);
  if (idleMatch && idleMatch[1]) {
    return idleMatch[1].trim();
  }
  if (text.length > 80) {
    return text.slice(0, 80) + "...";
  }
  return text;
}
