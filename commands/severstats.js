const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverstats')
        .setDescription('Displays server information and days since a specific date'),
    async execute(client, interaction) {
        const guild = interaction.guild;

        // Server creation date
        const createdAt = guild.createdAt;

        // Reference date (example: April 23, 2025)
        const startDate = new Date('2025-04-23');
        const now = new Date();

        // Calculate elapsed days
        const diffTime = Math.abs(now - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Create an embed
        const embed = new EmbedBuilder()
            .setTitle(`${guild.name} Statistics`)
            .addFields(
                { name: 'Server ID', value: guild.id, inline: true },
                { name: 'Member Count', value: `${guild.memberCount}`, inline: true },
                { name: 'Channel Count', value: `${guild.channels.cache.size}`, inline: true },
                { name: 'Server Creation Date', value: `${createdAt.toDateString()}`, inline: false },
                { name: 'Days since April 23, 2025', value: `${diffDays} days`, inline: false }
            )
            .setColor(0x0099ff)
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
