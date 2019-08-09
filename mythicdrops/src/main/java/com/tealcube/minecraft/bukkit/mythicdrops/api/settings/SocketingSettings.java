/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2019 Richard Harrah
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
package com.tealcube.minecraft.bukkit.mythicdrops.api.settings;

import java.util.List;
import org.bukkit.ChatColor;
import org.bukkit.Material;

public interface SocketingSettings {

  String getSocketGemName();

  List<String> getSocketGemLore();

  String getSockettedItemString();

  List<String> getSockettedItemLore();

  boolean isUseAttackerItemInHand();

  boolean isUseAttackerArmorEquipped();

  boolean isUseDefenderItemInHand();

  boolean isUseDefenderArmorEquipped();

  boolean isPreventMultipleChangesFromSockets();

  List<Material> getSocketGemMaterials();

  @Deprecated
  boolean isCanDropSocketGemsOnItems();

  boolean isPreventCraftingWithGems();

  boolean isUseTierColorForSocketName();

  ChatColor getDefaultSocketNameColorOnItems();

  String getSocketGemCombinerName();

  Material getSocketGemCombinerBufferMaterial();

  String getSocketGemCombinerBufferName();

  Material getSocketGemCombinerClickToCombineMaterial();

  String getSocketGemCombinerClickToCombineName();

  Material getSocketGemCombinerIneligibleToCombineMaterial();

  String getSocketGemCombinerIneligibleToCombineName();

  List<String> getSocketGemCombinerSameFamilyLore();

  List<String> getSocketGemCombinerSameLevelLore();

  List<String> getSocketGemCombinerSameFamilyAndLevelLore();

  List<String> getSocketGemCombinerNoGemFoundLore();

  boolean isSocketGemCombinerRequireSameFamily();

  boolean isSocketGemCombinerRequireSameLevel();

  List<String> getSocketFamilyLore();

  List<String> getSocketTypeLore();
}