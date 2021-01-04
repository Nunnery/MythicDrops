/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2020 Richard Harrah
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package com.tealcube.minecraft.bukkit.mythicdrops

import co.aikar.commands.ConditionFailedException
import co.aikar.commands.InvalidCommandArgument
import co.aikar.commands.PaperCommandManager
import com.github.shyiko.klob.Glob
import com.squareup.moshi.Moshi
import com.tealcube.minecraft.bukkit.mythicdrops.api.MythicDrops
import com.tealcube.minecraft.bukkit.mythicdrops.api.enchantments.CustomEnchantmentRegistry
import com.tealcube.minecraft.bukkit.mythicdrops.api.errors.LoadingErrorManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.CustomItem
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.CustomItemManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.ItemGroup
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.ItemGroupManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.builders.DropBuilder
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.strategies.DropStrategyManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.names.NameType
import com.tealcube.minecraft.bukkit.mythicdrops.api.relations.RelationManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.repair.RepairItemManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.settings.SettingsManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.GemTriggerType
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.SocketGem
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.SocketGemManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.cache.SocketGemCacheManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.combiners.SocketGemCombinerGuiFactory
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.combiners.SocketGemCombinerManager
import com.tealcube.minecraft.bukkit.mythicdrops.api.tiers.Tier
import com.tealcube.minecraft.bukkit.mythicdrops.api.tiers.TierManager
import com.tealcube.minecraft.bukkit.mythicdrops.armor.ArmorListener
import com.tealcube.minecraft.bukkit.mythicdrops.aura.AuraRunnable
import com.tealcube.minecraft.bukkit.mythicdrops.commands.CombinerCommands
import com.tealcube.minecraft.bukkit.mythicdrops.commands.CustomCreateCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.CustomItemsCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.DebugCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.DropCommands
import com.tealcube.minecraft.bukkit.mythicdrops.commands.DropRatesCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.GiveCommands
import com.tealcube.minecraft.bukkit.mythicdrops.commands.HelpCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.ItemGroupsCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.ModifyCommands
import com.tealcube.minecraft.bukkit.mythicdrops.commands.ReloadCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.SocketGemsCommand
import com.tealcube.minecraft.bukkit.mythicdrops.commands.SpawnCommands
import com.tealcube.minecraft.bukkit.mythicdrops.commands.TiersCommand
import com.tealcube.minecraft.bukkit.mythicdrops.config.migration.migrators.JarConfigMigrator
import com.tealcube.minecraft.bukkit.mythicdrops.crafting.CraftingListener
import com.tealcube.minecraft.bukkit.mythicdrops.debug.DebugListener
import com.tealcube.minecraft.bukkit.mythicdrops.debug.MythicDebugManager
import com.tealcube.minecraft.bukkit.mythicdrops.enchantments.MythicCustomEnchantmentRegistry
import com.tealcube.minecraft.bukkit.mythicdrops.errors.MythicLoadingErrorManager
import com.tealcube.minecraft.bukkit.mythicdrops.identification.IdentificationInventoryDragListener
import com.tealcube.minecraft.bukkit.mythicdrops.inventories.AnvilListener
import com.tealcube.minecraft.bukkit.mythicdrops.inventories.GrindstoneListener
import com.tealcube.minecraft.bukkit.mythicdrops.items.MythicCustomItem
import com.tealcube.minecraft.bukkit.mythicdrops.items.MythicCustomItemManager
import com.tealcube.minecraft.bukkit.mythicdrops.items.MythicItemGroup
import com.tealcube.minecraft.bukkit.mythicdrops.items.MythicItemGroupManager
import com.tealcube.minecraft.bukkit.mythicdrops.items.builders.MythicDropBuilder
import com.tealcube.minecraft.bukkit.mythicdrops.items.strategies.MultipleDropStrategy
import com.tealcube.minecraft.bukkit.mythicdrops.items.strategies.MythicDropStrategyManager
import com.tealcube.minecraft.bukkit.mythicdrops.items.strategies.SingleDropStrategy
import com.tealcube.minecraft.bukkit.mythicdrops.moshi.LevelAdapter
import com.tealcube.minecraft.bukkit.mythicdrops.moshi.MythicSettingsInterfaceJsonAdapterFactory
import com.tealcube.minecraft.bukkit.mythicdrops.names.NameMap
import com.tealcube.minecraft.bukkit.mythicdrops.relations.MythicRelation
import com.tealcube.minecraft.bukkit.mythicdrops.relations.MythicRelationManager
import com.tealcube.minecraft.bukkit.mythicdrops.repair.MythicRepairItem
import com.tealcube.minecraft.bukkit.mythicdrops.repair.MythicRepairItemManager
import com.tealcube.minecraft.bukkit.mythicdrops.repair.RepairingListener
import com.tealcube.minecraft.bukkit.mythicdrops.settings.MythicSettingsManager
import com.tealcube.minecraft.bukkit.mythicdrops.smithing.SmithingListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.MythicSocketGem
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.MythicSocketGemManager
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.SocketEffectListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.SocketExtenderInventoryDragListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.SocketGemCombinerListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.SocketInventoryDragListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.cache.MythicSocketGemCacheManager
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.cache.SocketGemCacheListener
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.combiners.MythicSocketGemCombiner
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.combiners.MythicSocketGemCombinerGuiFactory
import com.tealcube.minecraft.bukkit.mythicdrops.socketing.combiners.MythicSocketGemCombinerManager
import com.tealcube.minecraft.bukkit.mythicdrops.spawning.ItemDroppingListener
import com.tealcube.minecraft.bukkit.mythicdrops.spawning.ItemSpawningListener
import com.tealcube.minecraft.bukkit.mythicdrops.tiers.MythicTier
import com.tealcube.minecraft.bukkit.mythicdrops.tiers.MythicTierManager
import com.tealcube.minecraft.bukkit.mythicdrops.utils.AirUtil
import com.tealcube.minecraft.bukkit.mythicdrops.utils.EnchantmentUtil
import com.tealcube.minecraft.bukkit.mythicdrops.utils.FileUtil
import com.tealcube.minecraft.bukkit.mythicdrops.worldguard.WorldGuardFlags
import com.tealcube.minecraft.spigot.worldguard.adapters.lib.WorldGuardAdapters
import io.papermc.lib.PaperLib
import io.pixeloutlaw.minecraft.spigot.bandsaw.BandsawLoggerCustomizer
import io.pixeloutlaw.minecraft.spigot.bandsaw.JulLoggerFactory
import io.pixeloutlaw.minecraft.spigot.bandsaw.PluginFileHandler
import io.pixeloutlaw.minecraft.spigot.bandsaw.rebelliousAddHandler
import io.pixeloutlaw.minecraft.spigot.config.VersionedFileAwareYamlConfiguration
import io.pixeloutlaw.minecraft.spigot.config.migrator.moshi.ConfigMigrationStepJsonAdapterFactoryFactory
import io.pixeloutlaw.minecraft.spigot.config.migrator.moshi.MoshiConfigMigrationStepConverter
import io.pixeloutlaw.minecraft.spigot.config.migrator.moshi.SemVerAdapter
import io.pixeloutlaw.minecraft.spigot.mythicdrops.scheduleSyncDelayedTask
import io.pixeloutlaw.minecraft.spigot.plumbing.api.MinecraftVersions
import org.bstats.bukkit.Metrics
import org.bukkit.Bukkit
import org.bukkit.enchantments.Enchantment
import org.bukkit.event.HandlerList
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import java.io.File
import java.util.logging.Handler
import java.util.logging.Level
import java.util.logging.Logger

class MythicDropsPlugin : JavaPlugin(), MythicDrops {
    companion object {
        internal val moshi: Moshi =
            Moshi.Builder()
                .add(SemVerAdapter)
                .add(LevelAdapter)
                .add(ConfigMigrationStepJsonAdapterFactoryFactory.create())
                .add(MythicSettingsInterfaceJsonAdapterFactory())
                .build()

        private const val BSTATS_PLUGIN_ID = 5147

        private val bandsaw by lazy { JulLoggerFactory.getLogger(MythicDropsPlugin::class) }
        private lateinit var instance: MythicDropsPlugin

        @JvmStatic
        fun getInstance() = instance

        @JvmStatic
        fun getNewDropBuilder(): DropBuilder = MythicDropBuilder(getInstance())
    }

    private val configYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "config.yml"
            )
        )
    }
    private val creatureSpawningYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "creatureSpawning.yml"
            )
        )
    }
    internal val customItemYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "customItems.yml"
            )
        )
    }
    private val itemGroupYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "itemGroups.yml"
            )
        )
    }
    private val languageYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "language.yml"
            )
        )
    }
    private val socketGemsYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "socketGems.yml"
            )
        )
    }
    private val socketingYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "socketing.yml"
            )
        )
    }
    private val repairingYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "repairing.yml"
            )
        )
    }
    private val repairCostsYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "repairCosts.yml"
            )
        )
    }
    private val identifyingYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "identifying.yml"
            )
        )
    }
    private val relationYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "relation.yml"
            )
        )
    }
    private val socketGemCombinersYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "socketGemCombiners.yml"
            )
        )
    }
    private val startupYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(
            File(
                dataFolder,
                "startup.yml"
            )
        )
    }
    private val tierYAMLs: List<VersionedFileAwareYamlConfiguration> by lazy {
        Glob.from("tiers/**/*.yml").iterate(dataFolder.toPath()).asSequence().toList()
            .map { VersionedFileAwareYamlConfiguration(it.toFile()) }
    }
    override val itemGroupManager: ItemGroupManager by lazy { MythicItemGroupManager() }
    override val socketGemCacheManager: SocketGemCacheManager by lazy {
        MythicSocketGemCacheManager(
            this::scheduleSyncDelayedTask
        )
    }
    override val socketGemManager: SocketGemManager by lazy { MythicSocketGemManager() }
    override val socketGemCombinerManager: SocketGemCombinerManager by lazy { MythicSocketGemCombinerManager() }
    override val socketGemCombinerGuiFactory: SocketGemCombinerGuiFactory by lazy {
        MythicSocketGemCombinerGuiFactory(
            this,
            settingsManager
        )
    }
    override val settingsManager: SettingsManager by lazy { MythicSettingsManager() }
    override val repairItemManager: RepairItemManager by lazy { MythicRepairItemManager() }
    override val customItemManager: CustomItemManager by lazy { MythicCustomItemManager() }
    override val relationManager: RelationManager by lazy { MythicRelationManager() }
    override val tierManager: TierManager by lazy { MythicTierManager() }
    override val loadingErrorManager: LoadingErrorManager by lazy { MythicLoadingErrorManager() }
    override val customEnchantmentRegistry: CustomEnchantmentRegistry by lazy {
        MythicCustomEnchantmentRegistry(this)
    }
    override val dropStrategyManager: DropStrategyManager by lazy { MythicDropStrategyManager() }
    private val armorYAML: VersionedFileAwareYamlConfiguration by lazy {
        VersionedFileAwareYamlConfiguration(File(dataFolder, "armor.yml"))
    }
    private val logHandler = setupLogHandler()
    private val jarConfigMigrator by lazy {
        JarConfigMigrator(
            file,
            dataFolder,
            MoshiConfigMigrationStepConverter(moshi),
            backupOnMigrate = settingsManager.startupSettings.isBackupOnConfigMigrate
        )
    }
    private var auraTask: BukkitTask? = null

    override fun onLoad() {
        dataFolder.mkdirs()
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDrops)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsCustom)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsIdentityTome)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsSocketGem)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsTiered)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsUnidentifiedItem)
        WorldGuardAdapters.registerFlag(WorldGuardFlags.mythicDropsSocketExtender)
        reloadStartupSettings()
    }

    override fun onEnable() {
        instance = this
        if (!dataFolder.exists() && !dataFolder.mkdirs()) {
            logger.severe("Unable to create data folder - disabling MythicDrops!")
            Bukkit.getPluginManager().disablePlugin(this)
            return
        }

        if (!MinecraftVersions.isAtLeastMinecraft113) {
            logger.severe("MythicDrops only supports Minecraft 1.13+ - disabling MythicDrops!")
            Bukkit.getPluginManager().disablePlugin(this)
            return
        }

        customEnchantmentRegistry.registerEnchantments()

        bandsaw.info("Loading configuration files...")
        writeConfigFilesAndMigrate()

        bandsaw.info("Writing resources files if necessary...")
        writeResourceFiles()

        bandsaw.info("Registering default drop strategies...")
        dropStrategyManager.add(SingleDropStrategy(this))
        dropStrategyManager.add(MultipleDropStrategy(this))

        bandsaw.info("Loading all settings and everything else...")
        reloadSettings()
        reloadItemGroups()
        reloadTiers()
        reloadNames()
        reloadCustomItems()
        reloadRepairCosts()
        reloadSocketGems()
        reloadRelations()

        // SocketGemCombiners need to be loaded after the worlds have been loaded, so run a delayed
        // task:
        server.scheduler.runTask(this, Runnable { reloadSocketGemCombiners() })

        bandsaw.info("Registering general event listeners...")
        Bukkit.getPluginManager().registerEvents(DebugListener(MythicDebugManager), this)
        Bukkit.getPluginManager().registerEvents(AnvilListener(settingsManager, tierManager), this)
        Bukkit.getPluginManager().registerEvents(CraftingListener(settingsManager), this)
        Bukkit.getPluginManager().registerEvents(ArmorListener(settingsManager), this)
        if (MinecraftVersions.isAtLeastMinecraft114) {
            Bukkit.getPluginManager()
                .registerEvents(GrindstoneListener(customEnchantmentRegistry, customItemManager, settingsManager), this)
        }
        if (MinecraftVersions.isAtLeastMinecraft116) {
            if (MinecraftVersions.isAtLeastNewerMinecraft116) {
                Bukkit.getPluginManager().registerEvents(
                    SmithingListener(
                        customEnchantmentRegistry, customItemManager, settingsManager, tierManager
                    ),
                    this
                )
            } else {
                logger
                    .warning(
                        "Detected use of old version of Spigot 1.16. Please upgrade to make full use of MythicDrops!"
                    )
                bandsaw.warning(
                    "Detected use of old version of Spigot 1.16. Please upgrade to make full use of MythicDrops!"
                )
            }
        }

        bandsaw.info("Setting up commands...")
        setupCommands()

        if (settingsManager.configSettings.components.isCreatureSpawningEnabled) {
            logger.info("Mobs spawning with equipment enabled")
            bandsaw.info("Mobs spawning with equipment enabled")
            Bukkit.getPluginManager().registerEvents(ItemDroppingListener(this), this)
            Bukkit.getPluginManager().registerEvents(ItemSpawningListener(this), this)
        }
        if (settingsManager.configSettings.components.isRepairingEnabled) {
            logger.info("Repairing enabled")
            bandsaw.info("Repairing enabled")
            Bukkit.getPluginManager()
                .registerEvents(RepairingListener(repairItemManager, settingsManager), this)
        }
        if (settingsManager.configSettings.components.isSocketingEnabled) {
            logger.info("Socketing enabled")
            bandsaw.info("Socketing enabled")
            Bukkit.getPluginManager().registerEvents(
                SocketInventoryDragListener(
                    itemGroupManager, settingsManager, socketGemManager, tierManager
                ),
                this
            )
            Bukkit.getPluginManager().registerEvents(
                SocketEffectListener(this, socketGemCacheManager, settingsManager), this
            )
            Bukkit.getPluginManager().registerEvents(SocketGemCacheListener(this, socketGemCacheManager), this)
            Bukkit.getPluginManager().registerEvents(
                SocketGemCombinerListener(socketGemCombinerManager, socketGemCombinerGuiFactory),
                this
            )
            Bukkit.getPluginManager().registerEvents(
                SocketExtenderInventoryDragListener(settingsManager, tierManager), this
            )
        }
        if (settingsManager.configSettings.components.isIdentifyingEnabled) {
            logger.info("Identifying enabled")
            bandsaw.info("Identifying enabled")
            Bukkit.getPluginManager().registerEvents(
                IdentificationInventoryDragListener(
                    itemGroupManager, relationManager, settingsManager, tierManager
                ),
                this
            )
        }

        bandsaw.info("Shamelessly shilling for Paper...")
        PaperLib.suggestPaper(this)

        bandsaw.info("Setting up metrics...")
        setupMetrics()

        bandsaw.info("v${description.version} enabled")
    }

    override fun onDisable() {
        HandlerList.unregisterAll(this)
        Bukkit.getScheduler().cancelTasks(this)

        socketGemCacheManager.clear()
        socketGemManager.clear()
        itemGroupManager.clear()
        socketGemCombinerManager.clear()
        repairItemManager.clear()
        customItemManager.clear()
        relationManager.clear()
        tierManager.clear()
        loadingErrorManager.clear()

        logHandler?.let {
            Logger.getLogger("com.tealcube.minecraft.bukkit.mythicdrops")
                .removeHandler(it)
            Logger.getLogger("io.pixeloutlaw.minecraft.spigot")
                .removeHandler(it)
            Logger.getLogger("po.io.pixeloutlaw.minecraft.spigot")
                .removeHandler(it)
        }
    }

    override fun reloadSettings() {
        reloadStartupSettings()

        bandsaw.fine("Clearing loading errors...")
        loadingErrorManager.clear()

        bandsaw.fine("Loading settings from armor.yml...")
        armorYAML.load()
        settingsManager.loadArmorSettingsFromConfiguration(armorYAML)

        bandsaw.fine("Loading settings from config.yml...")
        configYAML.load()
        settingsManager.loadConfigSettingsFromConfiguration(configYAML)

        bandsaw.fine("Loading settings from language.yml...")
        languageYAML.load()
        settingsManager.loadLanguageSettingsFromConfiguration(languageYAML)

        bandsaw.fine("Loading settings from creatureSpawning.yml...")
        creatureSpawningYAML.load()
        settingsManager.loadCreatureSpawningSettingsFromConfiguration(creatureSpawningYAML)

        bandsaw.fine("Loading settings from repairing.yml...")
        repairingYAML.load()
        settingsManager.loadRepairingSettingsFromConfiguration(repairingYAML)

        bandsaw.fine("Loading settings from socketing.yml...")
        socketingYAML.load()
        settingsManager.loadSocketingSettingsFromConfiguration(socketingYAML)

        bandsaw.fine("Loading settings from identifying.yml...")
        identifyingYAML.load()
        settingsManager.loadIdentifyingSettingsFromConfiguration(identifyingYAML)
    }

    override fun reloadTiers() {
        bandsaw.fine("Loading tiers...")
        tierManager.clear()

        tierYAMLs.forEach { tierYaml ->
            tierYaml.load()
            bandsaw.fine("Loading tier from ${tierYaml.fileName}...")
            val key = tierYaml.fileName.replace(".yml", "")

            // check if tier with same name already exists
            if (tierManager.contains(key)) {
                val message = "Not loading $key as there is already a tier with that name loaded"
                bandsaw.info(message)
                loadingErrorManager.add(message)
                return@forEach
            }

            val tier = MythicTier.fromConfigurationSection(tierYaml, key, itemGroupManager, loadingErrorManager)
                ?: return@forEach

            // check if tier already exists with same color combination
            val preExistingTierWithColors = tierManager.getWithColors(tier.displayColor, tier.identifierColor)
            val disableLegacyItemChecks = settingsManager.configSettings.options.isDisableLegacyItemChecks
            if (preExistingTierWithColors != null && !disableLegacyItemChecks) {
                val message =
                    "Not loading $key as there is already a tier with that display color and " +
                        "identifier color loaded: ${preExistingTierWithColors.name}"
                bandsaw.info(message)
                loadingErrorManager.add(message)
                return@forEach
            }

            tierManager.add(tier)
        }

        bandsaw.info("Loaded tiers: ${tierManager.get().joinToString(prefix = "[", postfix = "]") { it.name }}")
    }

    override fun reloadCustomItems() {
        bandsaw.fine("Loading custom items...")
        customItemManager.clear()
        customItemYAML.load()
        customItemYAML.getKeys(false).forEach {
            if (!customItemYAML.isConfigurationSection(it)) {
                return@forEach
            }
            val customItemCs = customItemYAML.getOrCreateSection(it)
            val customItem = MythicCustomItem.fromConfigurationSection(customItemCs, it)
            if (AirUtil.isAir(customItem.material)) {
                val message =
                    "Error when loading custom item ($it): material is equivalent to AIR: ${customItem.material}"
                bandsaw.fine(message)
                loadingErrorManager.add(message)
                return@forEach
            }
            customItemManager.add(customItem)
        }
        bandsaw.info("Loaded custom items: ${customItemManager.get().size}")
    }

    override fun reloadNames() {
        NameMap.clear()

        bandsaw.fine("Loading prefixes...")
        val prefixes = loadPrefixes()
        NameMap.putAll(prefixes)
        bandsaw.info("Loaded prefixes: ${prefixes.values.flatten().size}")

        bandsaw.fine("Loading suffixes...")
        val suffixes = loadSuffixes()
        NameMap.putAll(suffixes)
        bandsaw.info("Loaded suffixes: ${suffixes.values.flatten().size}")

        bandsaw.fine("Loading lore...")
        val lore = loadLore()
        NameMap.putAll(lore)
        bandsaw.info("Loaded lore: ${lore.values.flatten().size}")

        bandsaw.fine("Loading mob names...")
        val mobNames = loadMobNames()
        NameMap.putAll(mobNames)
        bandsaw.info("Loaded mob names: ${mobNames.values.flatten().size}")
    }

    override fun reloadRepairCosts() {
        bandsaw.fine("Loading repair costs...")
        repairItemManager.clear()
        repairCostsYAML.load()
        repairCostsYAML.getKeys(false).mapNotNull { key ->
            if (!repairCostsYAML.isConfigurationSection(key)) {
                return@mapNotNull null
            }

            val repairItemConfigurationSection = repairCostsYAML.getOrCreateSection(key)
            MythicRepairItem.fromConfigurationSection(repairItemConfigurationSection, key, loadingErrorManager)
        }.forEach { repairItemManager.add(it) }
        bandsaw.info("Loaded repair items: ${repairItemManager.get().size}")
    }

    override fun reloadItemGroups() {
        bandsaw.fine("Loading item groups...")
        itemGroupManager.clear()
        itemGroupYAML.load()
        itemGroupYAML.getKeys(false).forEach { key ->
            if (!itemGroupYAML.isConfigurationSection(key)) {
                return@forEach
            }
            val itemGroupCs = itemGroupYAML.getOrCreateSection(key)
            itemGroupManager.add(MythicItemGroup.fromConfigurationSection(itemGroupCs, key))
        }
        bandsaw.info("Loaded item groups: ${itemGroupManager.get().size}")
    }

    override fun reloadSocketGemCombiners() {
        bandsaw.fine("Loading socket gem combiners...")
        socketGemCombinerManager.clear()
        socketGemCombinersYAML.load()
        socketGemCombinersYAML.getKeys(false).forEach {
            if (!socketGemCombinersYAML.isConfigurationSection(it)) return@forEach
            try {
                socketGemCombinerManager.add(
                    MythicSocketGemCombiner.fromConfigurationSection(
                        socketGemCombinersYAML.getOrCreateSection(
                            it
                        ),
                        it
                    )
                )
            } catch (iae: IllegalArgumentException) {
                bandsaw.log(Level.SEVERE, "Unable to load socket gem combiner with id=$it", iae)
                loadingErrorManager.add("Unable to load socket gem combiner with id=$it")
            }
        }
    }

    override fun saveSocketGemCombiners() {
        socketGemCombinersYAML
            .getKeys(false)
            .forEach { socketGemCombinersYAML[it] = null }
        socketGemCombinerManager.get().forEach {
            val key = it.uuid.toString()
            socketGemCombinersYAML["$key.world"] = it.location.world.name
            socketGemCombinersYAML["$key.x"] = it.location.x
            socketGemCombinersYAML["$key.y"] = it.location.y
            socketGemCombinersYAML["$key.z"] = it.location.z
        }
        socketGemCombinersYAML.save()
    }

    override fun reloadSocketGems() {
        bandsaw.fine("Loading socket gems...")
        socketGemManager.clear()
        socketGemsYAML.load()
        val socketGemsCs = socketGemsYAML.getOrCreateSection("socket-gems")
        socketGemsCs.getKeys(false).forEach { key ->
            socketGemManager.add(
                MythicSocketGem.fromConfigurationSection(
                    socketGemsCs.getOrCreateSection(key),
                    key,
                    itemGroupManager
                )
            )
        }
        bandsaw.info("Loaded socket gems: ${socketGemManager.get().size}")
        auraTask?.cancel()
        val isStartAuraRunnable = socketGemManager.get().any { it.gemTriggerType == GemTriggerType.AURA }
        if (isStartAuraRunnable) {
            auraTask = AuraRunnable(MythicDebugManager, socketGemCacheManager).runTaskTimer(
                this,
                20,
                20 * settingsManager.socketingSettings.options.auraRefreshInSeconds.toLong()
            )
            bandsaw.info("Auras enabled")
        }
    }

    override fun reloadRelations() {
        bandsaw.fine("Loading relations...")
        relationManager.clear()
        relationYAML.load()
        relationYAML.getKeys(false).forEach {
            if (!relationYAML.isConfigurationSection(it)) return@forEach
            relationManager.add(MythicRelation.fromConfigurationSection(relationYAML.getOrCreateSection(it), it))
        }
        bandsaw.info("Loaded relations: ${relationManager.get().size}")
    }

    private fun reloadStartupSettings() {
        startupYAML.load()
        settingsManager.loadStartupSettingsFromConfiguration(startupYAML)
        if (settingsManager.startupSettings.debug) {
            logger.info("Debug logging enabled!")
            Logger.getLogger("com.tealcube.minecraft.bukkit.mythicdrops").level = Level.FINEST
            Logger.getLogger("io.pixeloutlaw.minecraft.spigot").level = Level.FINEST
            Logger.getLogger("po.io.pixeloutlaw.minecraft.spigot").level = Level.FINEST
        } else {
            Logger.getLogger("com.tealcube.minecraft.bukkit.mythicdrops").level = Level.INFO
            Logger.getLogger("io.pixeloutlaw.minecraft.spigot").level = Level.INFO
            Logger.getLogger("po.io.pixeloutlaw.minecraft.spigot").level = Level.INFO
        }

        settingsManager.startupSettings.loggingLevels.forEach { (loggerName, level) ->
            logger.info("Logging at level $level for logger $loggerName")
            Logger.getLogger(loggerName).level = level
        }
    }

    private fun writeResourceFiles() {
        val resources = listOf(
            "/resources/lore/general.txt",
            "/resources/lore/enchantments/damage_all.txt",
            "/resources/lore/materials/diamond_sword.txt",
            "/resources/lore/tiers/legendary.txt",
            "/resources/lore/itemtypes/sword.txt",
            "/resources/prefixes/general.txt",
            "/resources/prefixes/enchantments/damage_all.txt",
            "/resources/prefixes/materials/diamond_sword.txt",
            "/resources/prefixes/tiers/legendary.txt",
            "/resources/prefixes/itemtypes/sword.txt",
            "/resources/suffixes/general.txt",
            "/resources/suffixes/enchantments/damage_all.txt",
            "/resources/suffixes/materials/diamond_sword.txt",
            "/resources/suffixes/tiers/legendary.txt",
            "/resources/suffixes/itemtypes/sword.txt",
            "/resources/mobnames/general.txt"
        )
        resources.forEach { resource ->
            val actual = File(dataFolder, resource)
            val parentDirectory = actual.parentFile
            // we only write these resources if their parent folder doesn't exist, if we can make their parent
            // directory, and if the file doesn't already exist
            if (parentDirectory.exists() || !parentDirectory.exists() && !parentDirectory.mkdirs() || actual.exists()) {
                return@forEach
            }
            try {
                val contents = this.javaClass.classLoader?.getResource(resource)?.readText() ?: ""
                actual.writeText(contents)
            } catch (exception: Exception) {
                bandsaw.log(Level.SEVERE, "Unable to write resource! resource=$resource", exception)
            }
        }
    }

    private fun writeConfigFilesAndMigrate() {
        // socketting.yml was renamed to socketing.yml
        FileUtil.renameFile(File(dataFolder, "socketting.yml"), "socketting_RENAMED_TO_socketing.yml.backup")

        // write all configuration files from the JAR if they don't exist in the data folder
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("armor.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("config.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("creatureSpawning.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("customItems.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("language.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("identifying.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("itemGroups.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("relation.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("repairing.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("repairCosts.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("socketing.yml")
        jarConfigMigrator.writeYamlFromResourcesIfNotExists("socketGems.yml")

        // use config-migrator to migrate all of the existing configs using the migrations defined
        // in src/main/resources/config/migrations
        jarConfigMigrator.migrate()
    }

    private fun setupLogHandler(): Handler? = try {
        val fileHandler = PluginFileHandler(this)
        JulLoggerFactory.registerLoggerCustomizer(
            "com.tealcube.minecraft.bukkit.mythicdrops",
            object : BandsawLoggerCustomizer {
                override fun customize(name: String, logger: Logger): Logger =
                    logger.rebelliousAddHandler(fileHandler)
            }
        )
        JulLoggerFactory.registerLoggerCustomizer(
            "io.pixeloutlaw.minecraft.spigot",
            object : BandsawLoggerCustomizer {
                override fun customize(name: String, logger: Logger): Logger =
                    logger.rebelliousAddHandler(fileHandler)
            }
        )
        JulLoggerFactory.registerLoggerCustomizer(
            "po.io.pixeloutlaw.minecraft.spigot",
            object :
                BandsawLoggerCustomizer {
                override fun customize(name: String, logger: Logger): Logger =
                    logger.rebelliousAddHandler(fileHandler)
            }
        )

        logger.info("MythicDrops logging has been setup")
        fileHandler
    } catch (ex: Exception) {
        logger.log(Level.SEVERE, "Unable to setup logging for MythicDrops", ex)
        null
    }

    private fun setupMetrics() {
        val metrics = Metrics(this, BSTATS_PLUGIN_ID)
        metrics.addCustomChart(Metrics.SingleLineChart("amount_of_tiers") { tierManager.get().size })
        metrics.addCustomChart(Metrics.SingleLineChart("amount_of_custom_items") { customItemManager.get().size })
        metrics.addCustomChart(Metrics.SingleLineChart("amount_of_socket_gems") { socketGemManager.get().size })
    }

    private fun setupCommands() {
        val commandManager = PaperCommandManager(this)
        @Suppress("DEPRECATION")
        commandManager.enableUnstableAPI("help")
        commandManager.registerDependency(CustomItemManager::class.java, customItemManager)
        commandManager.registerDependency(DropStrategyManager::class.java, dropStrategyManager)
        commandManager.registerDependency(LoadingErrorManager::class.java, loadingErrorManager)
        commandManager.registerDependency(Moshi::class.java, moshi)
        commandManager.registerDependency(MythicDebugManager::class.java, MythicDebugManager)
        commandManager.registerDependency(MythicDrops::class.java, this)
        commandManager.registerDependency(SettingsManager::class.java, settingsManager)
        commandManager.registerDependency(TierManager::class.java, tierManager)
        registerContexts(commandManager)
        registerConditions(commandManager)
        registerCompletions(commandManager)
        registerCommands(commandManager)
    }

    private fun registerContexts(commandManager: PaperCommandManager) {
        commandManager.commandContexts.registerContext(CustomItem::class.java) { c ->
            val firstArg = c.popFirstArg() ?: throw InvalidCommandArgument()
            val customItem = customItemManager.getById(firstArg) ?: customItemManager.getById(
                firstArg.replace(
                    "_",
                    " "
                )
            )
            if (customItem == null && firstArg != "*") {
                throw InvalidCommandArgument("No custom item found by that name!")
            }
            customItem
        }
        commandManager
            .commandContexts
            .registerContext(
                Enchantment::class.java
            ) { c ->
                val firstArg = c.firstArg
                val enchantment = EnchantmentUtil.getByKeyOrName(firstArg) ?: throw InvalidCommandArgument()
                c.popFirstArg()
                enchantment
            }
        commandManager.commandContexts.registerContext(SocketGem::class.java) { c ->
            val firstArg = c.popFirstArg() ?: throw InvalidCommandArgument()
            val socketGem = socketGemManager.getById(firstArg) ?: socketGemManager.getById(firstArg.replace("_", " "))
            if (socketGem == null && firstArg != "*") {
                throw InvalidCommandArgument("No socket gem found by that name!")
            }
            socketGem
        }
        commandManager.commandContexts.registerContext(Tier::class.java) { c ->
            val firstArg = c.popFirstArg() ?: throw InvalidCommandArgument()
            val tier = tierManager.getByName(firstArg) ?: tierManager.getByName(firstArg.replace("_", " "))
            if (tier == null && firstArg != "*") {
                throw InvalidCommandArgument("No tier found by that name!")
            }
            tier
        }
        commandManager.commandContexts.registerContext(ItemGroup::class.java) { c ->
            val firstArg = c.popFirstArg() ?: throw InvalidCommandArgument()
            val itemGroup = itemGroupManager.getById(firstArg) ?: itemGroupManager.getById(firstArg.replace("_", " "))
            if (itemGroup == null && firstArg != "*") {
                throw InvalidCommandArgument("No tier found by that name!")
            }
            itemGroup
        }
    }

    private fun registerConditions(commandManager: PaperCommandManager) {
        commandManager
            .commandConditions
            .addCondition(
                Int::class.java,
                "limits"
            ) { c, _, value ->
                if (value != null) {
                    if (c.hasConfig("min") && c.getConfigValue("min", 0) > value) {
                        throw ConditionFailedException(
                            "Min value must be " + c.getConfigValue("min", 0)!!
                        )
                    }
                    if (c.hasConfig("max") && c.getConfigValue("max", 3) < value) {
                        throw ConditionFailedException(
                            "Max value must be " + c.getConfigValue("max", 3)!!
                        )
                    }
                }
            }
    }

    private fun registerCompletions(commandManager: PaperCommandManager) {
        commandManager
            .commandCompletions
            .registerCompletion(
                "enchantments"
            ) { _ ->
                Enchantment.values().map {
                    try {
                        it.key.toString()
                    } catch (ex: Throwable) {
                        @Suppress("DEPRECATION")
                        it.name
                    }
                }
            }
        commandManager.commandCompletions.registerCompletion("customItems") { _ ->
            listOf("*") + customItemManager.get().map { it.name.replace(" ", "_") }
        }
        commandManager.commandCompletions.registerCompletion("socketGems") { _ ->
            listOf("*") + socketGemManager.get().map { it.name.replace(" ", "_") }
        }
        commandManager.commandCompletions.registerCompletion("tiers") { _ ->
            listOf("*") + tierManager.get().map { it.name.replace(" ", "_") }
        }
        commandManager.commandCompletions.registerCompletion("itemGroups") { _ ->
            listOf("*") + itemGroupManager.get().map { it.name.replace(" ", "_") }
        }
    }

    private fun registerCommands(commandManager: PaperCommandManager) {
        commandManager.registerCommand(CombinerCommands())
        commandManager.registerCommand(CustomCreateCommand())
        commandManager.registerCommand(CustomItemsCommand())
        commandManager.registerCommand(DebugCommand())
        commandManager.registerCommand(DropCommands())
        commandManager.registerCommand(DropRatesCommand())
        commandManager.registerCommand(GiveCommands())
        commandManager.registerCommand(HelpCommand())
        commandManager.registerCommand(ItemGroupsCommand())
        commandManager.registerCommand(ModifyCommands())
        commandManager.registerCommand(ReloadCommand())
        commandManager.registerCommand(SocketGemsCommand())
        commandManager.registerCommand(SpawnCommands())
        commandManager.registerCommand(TiersCommand())
    }

    private fun loadPrefixes(): Map<out String, List<String>> {
        val prefixes = mutableMapOf<String, List<String>>()
        val dataFolderAsPath = dataFolder.toPath()

        Glob.from("resources/prefixes/general.txt").iterate(dataFolderAsPath).forEach {
            prefixes[NameType.GENERAL_PREFIX.format] = it.toFile().readLines()
        }

        Glob.from("resources/prefixes/tiers/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.TIER_PREFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            prefixes[key] = file.readLines()
        }

        Glob.from("resources/prefixes/materials/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.MATERIAL_PREFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            prefixes[key] = file.readLines()
        }

        Glob.from("resources/prefixes/enchantments/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ENCHANTMENT_PREFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            prefixes[key] = file.readLines()
        }

        Glob.from("resources/prefixes/itemtypes/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ITEMTYPE_PREFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            prefixes[key] = file.readLines()
        }

        return prefixes
    }

    private fun loadSuffixes(): Map<out String, List<String>> {
        val suffixes = mutableMapOf<String, List<String>>()
        val dataFolderAsPath = dataFolder.toPath()

        Glob.from("resources/suffixes/general.txt").iterate(dataFolderAsPath).forEach {
            suffixes[NameType.GENERAL_SUFFIX.format] = it.toFile().readLines()
        }

        Glob.from("resources/suffixes/tiers/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.TIER_SUFFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            suffixes[key] = file.readLines()
        }

        Glob.from("resources/suffixes/materials/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.MATERIAL_SUFFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            suffixes[key] = file.readLines()
        }

        Glob.from("resources/suffixes/enchantments/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ENCHANTMENT_SUFFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            suffixes[key] = file.readLines()
        }

        Glob.from("resources/suffixes/itemtypes/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ITEMTYPE_SUFFIX.format}${file.name.replace(".txt", "").toLowerCase()}"
            suffixes[key] = file.readLines()
        }

        return suffixes
    }

    private fun loadLore(): Map<out String, List<String>> {
        val lore = mutableMapOf<String, List<String>>()
        val dataFolderAsPath = dataFolder.toPath()

        Glob.from("resources/lore/general.txt").iterate(dataFolderAsPath).forEach {
            lore[NameType.GENERAL_LORE.format] = it.toFile().readLines()
        }

        Glob.from("resources/lore/tiers/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.TIER_LORE.format}${file.name.replace(".txt", "").toLowerCase()}"
            lore[key] = file.readLines()
        }

        Glob.from("resources/lore/materials/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.MATERIAL_LORE.format}${file.name.replace(".txt", "").toLowerCase()}"
            lore[key] = file.readLines()
        }

        Glob.from("resources/lore/enchantments/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ENCHANTMENT_LORE.format}${file.name.replace(".txt", "").toLowerCase()}"
            lore[key] = file.readLines()
        }

        Glob.from("resources/lore/itemtypes/*.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.ITEMTYPE_LORE.format}${file.name.replace(".txt", "").toLowerCase()}"
            lore[key] = file.readLines()
        }

        return lore
    }

    private fun loadMobNames(): Map<out String, List<String>> {
        val mobNames = mutableMapOf<String, List<String>>()
        val dataFolderAsPath = dataFolder.toPath()

        Glob.from("resources/mobnames/general.txt").iterate(dataFolderAsPath).forEach {
            mobNames[NameType.GENERAL_MOB_NAME.format] = it.toFile().readLines()
        }

        Glob.from("resources/mobnames/*.txt", "!resources/mobnames/general.txt").iterate(dataFolderAsPath).forEach {
            val file = it.toFile()
            val key = "${NameType.SPECIFIC_MOB_NAME.format}${file.name.replace(".txt", "").toLowerCase()}"
            mobNames[key] = file.readLines()
        }

        return mobNames
    }
}
