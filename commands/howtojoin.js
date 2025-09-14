const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('howtojoin')               // コマンド名
        .setDescription('RW member試験内容を表示します'),
    async execute(client, interaction) {
        // ここに試験内容を記入
        const content = `
# RW Member Admission Test Rules

**■ Purpose of the Test**
This test is designed to select individuals who possess the skills and reliability befitting an RW member.

**■ Eligibility**
Anyone who wishes to join RW.

**■ Test Conditions (Passing Criteria)**

[Stage 1] Skill Assessment

Win a 1v1 “first-to-10” match against a test examiner. (Map: Castle or Arena / Bow: any bow)

You may choose your examiner from: 7003, or, dekopon, majesty, or WOLFART.

Regeneration is limited to 12.

Examiners are players officially recognized within the clan. (Those wishing to become examiners must be appointed by a member.)

If you fail the test, you may retake it no sooner than one week later. (After failing a second test, you must wait 1–2 months or longer before trying again.)

[Stage 2] Trustworthiness Assessment (Internal Review)
Your behavior, attitude, and manners within the clan will be evaluated based on:

Any history of rule violations

Communication skills

Sense of responsibility and willingness to report issues

You will pass if at least 60% of current members approve you in a trust vote.

**■ Rules After Admission**
If you break the rules or engage in behavior that undermines trust, the leader and sub-leaders will deliberate, and you may be banned depending on the outcome.

**■ Notes**
Test and operational rules may be revised at any time depending on the state of the clan.
        `;
        
        await interaction.reply({ content, ephemeral: true });
    },
};
