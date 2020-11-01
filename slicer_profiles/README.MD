## Passos para atualizar:
- Exportar configurações via prusa-slicer
- Verificar alterações via meld, manter apenas modificações entre um perfil e outro
- Adicionar o código abaixo no default.ini:

```
# Código para suportar melhor o color change
layer_gcode = ;AFTER_LAYER_CHANGE\n;[layer_z]\n;CURRENT_Z: [layer_z]
```