import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileIcons } from '../../core/icons/fileIcons';
import { folderIcons } from '../../core/icons/folderIcons';

const outputFilePath = join(__dirname, '../../../SUPPORTED_ICONS.md');

let mdContent = `# 📚 Lista de Ícones Suportados - Max Big Icon Pack\n\n`;
mdContent += `Este arquivo contém a tabela completa de todos os ícones de arquivos e pastas suportados nesta extensão, juntamente com seus respectivos nomes e mapeamentos de extensões/nomes de pastas.\n\n`;

// --- ÍCONES DE PASTAS ---
mdContent += `## 📁 Ícones de Pastas\n\n`;
mdContent += `| Visualização | Nome do Ícone | Pastas Associadas |\n`;
mdContent += `| :---: | :--- | :--- |\n`;

//folderIcons[0] é o tema 'specific' que contém a maioria dos ícones de pasta mapeados
const specificFolderTheme = folderIcons.find(
  (theme) => theme.name === 'specific'
);

if (specificFolderTheme && specificFolderTheme.icons) {
  // Ordena os ícones de pasta por nome
  const sortedFolderIcons = [...specificFolderTheme.icons].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  for (const folderIcon of sortedFolderIcons) {
    const iconName = folderIcon.name;
    const folderNames = folderIcon.folderNames
      ? folderIcon.folderNames.map((f) => '`' + f + '`').join(', ')
      : 'Nenhuma';

    // Caminho da imagem local
    const imgTag =
      '<img src="./icons/' +
      iconName +
      '.svg" width="32" alt="' +
      iconName +
      '">';
    mdContent +=
      '| ' + imgTag + ' | `' + iconName + '` | ' + folderNames + ' |\n';
  }
}

mdContent += `\n---\n\n`;

// --- ÍCONES DE ARQUIVOS ---
mdContent += `## 📄 Ícones de Arquivos\n\n`;
mdContent += `| Visualização | Nome do Ícone | Extensões / Nomes de Arquivo |\n`;
mdContent += `| :---: | :--- | :--- |\n`;

if (fileIcons && fileIcons.icons) {
  // Ordena os ícones de arquivo por nome
  const sortedFileIcons = [...fileIcons.icons].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  for (const fileIcon of sortedFileIcons) {
    const iconName = fileIcon.name;

    const associations: string[] = [];
    if (fileIcon.fileExtensions) {
      fileIcon.fileExtensions.forEach((ext) =>
        associations.push('`.' + ext + '`')
      );
    }
    if (fileIcon.fileNames) {
      fileIcon.fileNames.forEach((name) => associations.push('`' + name + '`'));
    }

    const assocText =
      associations.length > 0 ? associations.join(', ') : 'Nenhuma';
    const imgTag =
      '<img src="./icons/' +
      iconName +
      '.svg" width="32" alt="' +
      iconName +
      '">';
    mdContent +=
      '| ' + imgTag + ' | `' + iconName + '` | ' + assocText + ' |\n';
  }
}

try {
  writeFileSync(outputFilePath, mdContent, 'utf8');
  console.log('Tabela de ícones gerada com sucesso em SUPPORTED_ICONS.md');
} catch (error) {
  console.error('Erro ao gerar o arquivo de tabela de ícones:', error);
}
