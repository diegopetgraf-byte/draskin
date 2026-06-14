import { useMemo, useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Palette, Layers, Package, Sparkles, FolderOpen } from 'lucide-react';
import type { ProductVariant } from '@/lib/products/types';


interface ProductOption {
  name: string;
  values: string[];
}

interface VariantEdge {
  node: ProductVariant;
}

interface ProductVariantSelectorProps {
  options: ProductOption[];
  variants: VariantEdge[];
  selectedVariantIndex: number;
  onVariantChange: (index: number) => void;
  formatPrice: (price: number) => string;
  productHandle?: string;
}

// Configuration for each option type
interface OptionConfig {
  label: string;
  description: string;
  icon: typeof Palette;
}

// Get option configuration based on option name
const getOptionConfig = (name: string, productHandle?: string): OptionConfig => {
  const lowerName = name.toLowerCase();

  if (lowerName.includes('design') || lowerName.includes('logotipo') || lowerName.includes('modelo') || lowerName.includes('arte')) {
    return {
      label: 'Design',
      description: '',
      icon: Palette,
    };
  }

  if (lowerName.includes('gramatura')) {
    return {
      label: 'Gramatura do Papel',
      description: '',
      icon: Layers,
    };
  }

  if (lowerName.includes('papel') || lowerName.includes('acabamento')) {
    return {
      label: 'Acabamento',
      description: '',
      icon: Layers,
    };
  }

  if (lowerName.includes('quantidade') || lowerName.includes('unidades')) {
    // Check INCLUSIONS for "Blocos com 100 folhas" label
    // The user explicitly requested these types to have the specific label
    // Exclude cartao-visita products (business cards) from this logic
    const isBloco = productHandle ? (
      !productHandle.toLowerCase().includes('cartao-visita') &&
      !productHandle.toLowerCase().includes('ficha-clinica-full-face') &&
      !productHandle.toLowerCase().includes('prontuario-estetico') &&
      !productHandle.toLowerCase().includes('anamnese-planejamento-injetaveis') &&
      [
        'ficha', 'termo', 'receituario', 'atestado', 'prontuario', 'laudo',
        'material', 'requisicao', 'prescricao', 'solicitacao', 'carta',
        'comanda', 'recibo', 'planner', 'formulario', 'bloco'
      ].some(inc => productHandle.toLowerCase().includes(inc))
    ) : false;

    return {
      label: isBloco ? 'Blocos com 100 folhas' : 'Quantidade',
      description: '',
      icon: Package,
    };
  }

  return {
    label: name,
    description: '',
    icon: FolderOpen,
  };
};

// Acabamento option details for premium product display
interface AcabamentoDetails {
  name: string;
  paper: string;
  finish: string;
  bolso: string;
  tier: 'Clássico' | 'Popular' | 'Premium' | 'Super Premium';
  highlight?: string;
}

const parseAcabamentoValue = (value: string): AcabamentoDetails => {
  const lowerValue = value.toLowerCase();

  // Business card corner styles
  if (lowerValue.includes('cantos arredondados') || lowerValue.includes('arredondado')) {
    return {
      name: 'Cantos arredondados',
      paper: 'Couché Press 300g/m²',
      finish: 'Laminação fosca + verniz localizado',
      bolso: 'Cantos arredondados',
      tier: 'Premium',
      highlight: 'Acabamento sofisticado',
    };
  }

  if (lowerValue.includes('bordas retas') || lowerValue.includes('retas')) {
    return {
      name: 'Bordas retas',
      paper: 'Couché Press 300g/m²',
      finish: 'Laminação fosca + verniz localizado',
      bolso: 'Bordas retas',
      tier: 'Clássico',
    };
  }

  // Super Premium - laminação fosca interna e externa + impressão interna e externa
  if (lowerValue.includes('laminação fosca interna e externa') ||
    (lowerValue.includes('super premium') && lowerValue.includes('interna e externa'))) {
    return {
      name: 'Super Premium',
      paper: 'Couché Press 300g/m²',
      finish: 'Laminação fosca e impressão interna e externa',
      bolso: lowerValue.includes('orelhas') ? 'Orelhas para grampear' : 'Bolsa colada',
      tier: 'Super Premium',
      highlight: 'Máximo requinte',
    };
  }

  // Premium - laminação fosca externa only
  if (lowerValue.includes('laminação fosca externa') ||
    (lowerValue.includes('premium') && !lowerValue.includes('super'))) {
    return {
      name: 'Premium',
      paper: 'Couché Press 300g/m²',
      finish: 'Laminação fosca externa',
      bolso: lowerValue.includes('orelhas') ? 'Orelhas para grampear' : 'Bolsa colada',
      tier: 'Premium',
    };
  }

  // Popular - Bolsa colada, sem enobrecimento
  if (lowerValue.includes('bolsa colada') && lowerValue.includes('sem enobrecimento')) {
    return {
      name: 'Popular',
      paper: 'Couché Press 250g/m²',
      finish: 'Sem enobrecimento',
      bolso: 'Bolsa colada',
      tier: 'Popular',
    };
  }

  // Clássico - Orelhas para grampear, sem enobrecimento
  if (lowerValue.includes('orelhas para grampear')) {
    return {
      name: 'Clássica',
      paper: 'Couché Press 250g/m²',
      finish: 'Sem enobrecimento',
      bolso: 'Orelhas para grampear',
      tier: 'Clássico',
    };
  }

  // Fallback for "sem enobrecimento" variants
  if (lowerValue.includes('sem enobrecimento')) {
    return {
      name: 'Clássica',
      paper: 'Couché Press 250g/m²',
      finish: 'Sem enobrecimento',
      bolso: 'Bolsa colada',
      tier: 'Clássico',
    };
  }

  return {
    name: value.substring(0, 25),
    paper: 'Couché Press',
    finish: '-',
    bolso: '-',
    tier: 'Clássico',
  };
};

// Tier badge colors
const getTierStyles = (tier: AcabamentoDetails['tier']) => {
  switch (tier) {
    case 'Super Premium':
      return 'bg-gradient-to-r from-amber-400/20 to-amber-500/20 text-amber-700 border border-amber-300/30';
    case 'Premium':
      return 'bg-primary/10 text-accent';
    case 'Popular':
      return 'bg-pix/10 text-pix';
    default:
      return 'bg-secondary text-muted-foreground';
  }
};

export const ProductVariantSelector = ({
  options,
  variants,
  selectedVariantIndex,
  onVariantChange,
  formatPrice,
  productHandle,
}: ProductVariantSelectorProps) => {
  // Get selected variant's options
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const selectedOptions = useMemo(
    () => selectedVariant?.selectedOptions || [],
    [selectedVariant]
  );

  // Track selected value for each option - must be before any early returns
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    selectedOptions.forEach(opt => {
      initial[opt.name] = opt.value;
    });
    return initial;
  });

  // Update local state when external selection changes
  useEffect(() => {
    const newValues: Record<string, string> = {};
    selectedOptions.forEach(opt => {
      newValues[opt.name] = opt.value;
    });
    setSelectedValues(newValues);
  }, [selectedVariantIndex, selectedOptions]);

  // Check if this is a kit product
  const isKitProduct = productHandle?.toLowerCase().includes('kit');

  // Sort variants numerically by extracting leading number from title
  // Must be before any early returns to follow hooks rules
  const sortedVariantsWithIndex = useMemo(() => {
    return variants
      .map((v, originalIndex) => ({ variant: v, originalIndex }))
      .sort((a, b) => {
        const numA = parseInt(a.variant.node.title.match(/^\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.variant.node.title.match(/^\d+/)?.[0] || '0', 10);
        return numA - numB;
      });
  }, [variants]);



  // Find variant that matches all selected options
  const findMatchingVariant = (optionName: string, optionValue: string): number => {
    const newSelections = { ...selectedValues, [optionName]: optionValue };

    const matchIndex = variants.findIndex(v => {
      const variantOpts = v.node.selectedOptions || [];
      return options.every(opt => {
        const variantValue = variantOpts.find(vo => vo.name === opt.name)?.value;
        return variantValue === newSelections[opt.name];
      });
    });

    return matchIndex >= 0 ? matchIndex : 0;
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [optionName]: value }));
    const newVariantIndex = findMatchingVariant(optionName, value);
    onVariantChange(newVariantIndex);
  };

  // Check if this is an acabamento option (for special rendering)
  const isAcabamentoOption = (name: string) => {
    const lower = name.toLowerCase();
    return (lower.includes('acabamento') || lower.includes('papel')) && !lower.includes('gramatura');
  };

  // If there's only one option or no options, show simple selector
  if (options.length <= 1 && variants.length > 1) {
    return (
      <div className="space-y-2">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {options.length > 0 ? getOptionConfig(options[0].name, productHandle).label : 'Quantidade'}:
        </label>
        <Select
          value={selectedVariantIndex.toString()}
          onValueChange={(val) => onVariantChange(parseInt(val))}
        >
          <SelectTrigger
            className="w-full h-12 rounded-xl bg-secondary border-border text-sm"
            style={{ boxShadow: 'var(--clay-shadow-sm)' }}
          >
            <SelectValue placeholder="Selecione uma variante" />
          </SelectTrigger>
          <SelectContent className="bg-secondary border-border z-50">
            {sortedVariantsWithIndex.map(({ variant: v, originalIndex }) => (
              <SelectItem
                key={v.node.id}
                value={originalIndex.toString()}
                disabled={!v.node.availableForSale}
                className="cursor-pointer text-sm"
              >
                {v.node.title} — {formatPrice(parseFloat(v.node.price.amount))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Production info */}
        <p className="text-xs text-muted-foreground text-left pt-3">
          Padrão de excelência, com produção em até 12 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {options.filter((option) => {
        // Special case: Hide Acabamento dropdown for specific envelope product
        if (productHandle === 'envelope-veterinario-personalizado') {
          const lowerName = option.name.toLowerCase();
          if (lowerName.includes('acabamento') || lowerName.includes('papel')) {
            return false;
          }
        }
        return true;
      }).map((option) => {
        const currentValue = selectedValues[option.name] || option.values[0];
        const config = getOptionConfig(option.name, productHandle);
        const Icon = config.icon;
        const isAcabamento = isAcabamentoOption(option.name);

        // Parse acabamento details for display
        const acabamentoDetails = isAcabamento ? parseAcabamentoValue(currentValue) : null;

        return (
          <div
            key={option.name}
            className="space-y-2"
          >
            {/* Label */}
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {config.label}
            </label>

            {/* Dropdown */}
            <Select
              value={currentValue}
              onValueChange={(val) => handleOptionChange(option.name, val)}
            >
              <SelectTrigger
                className="w-full min-h-[3rem] h-auto py-2.5 rounded-xl bg-secondary border-border text-sm"
                style={{ boxShadow: 'var(--clay-shadow-sm)' }}
              >
                <div className="flex items-center gap-2 min-w-0 flex-1 text-left">
                  {isAcabamento && acabamentoDetails ? (
                    <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium truncate">{acabamentoDetails.bolso}</span>
                        <span className={`flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full ${getTierStyles(acabamentoDetails.tier)}`}>
                          {acabamentoDetails.tier}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground truncate w-full">
                        {acabamentoDetails.paper} • {acabamentoDetails.finish}
                      </span>
                    </div>
                  ) : (
                    <span className="truncate">{currentValue}</span>
                  )}
                </div>
              </SelectTrigger>
              <SelectContent
                className="bg-secondary border-border z-50 max-w-[calc(100vw-2rem)] w-[var(--radix-select-trigger-width)]"
                position="popper"
                side="bottom"
                align="start"
                sideOffset={4}
              >
                {option.values.map((value) => {
                  const details = isAcabamento ? parseAcabamentoValue(value) : null;

                  return (
                    <SelectItem
                      key={value}
                      value={value}
                      className="cursor-pointer text-sm py-3"
                    >
                      {isAcabamento && details ? (
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{details.bolso}</span>
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${getTierStyles(details.tier)}`}>
                              {details.tier}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {details.paper} • {details.finish}
                          </span>
                          {details.highlight && (
                            <span className="text-[10px] text-accent font-medium">
                              ✨ {details.highlight}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span>{value}</span>
                      )}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        );
      })}

      {/* Production info */}
      <p className="text-xs text-muted-foreground text-left pt-1">
        Padrão de excelência, com produção em até 12 dias úteis.
      </p>
    </div>
  );
};
