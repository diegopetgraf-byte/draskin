'use client';

import brasilFlag from '@/assets/brasil.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCartStore } from '@/stores/cartStore';

interface ShippingFormProps {
    /** Extra className applied to every Input field */
    inputClassName?: string;
    /** Extra className applied to internal dividers */
    dividerClassName?: string;
    /** Show the "Enviamos para todo o Brasil" heading. False by default (drawer already shows it as toggle label) */
    showHeader?: boolean;
}

export function ShippingForm({
    inputClassName = 'h-9 text-base md:text-sm bg-white border-blue-200 focus-visible:ring-0 outline-none',
    dividerClassName = 'border-blue-200',
    showHeader = false,
}: ShippingFormProps) {
    const { shippingData, updateShippingField } = useCartStore();

    return (
        <form autoComplete="off" className="space-y-3">
            {showHeader && (
                <div className="flex items-center gap-2 mb-1">
                    <img src={brasilFlag.src} alt="BR" className="w-4 h-4" />
                    <span className="text-sm font-bold text-foreground">Enviamos para todo o Brasil</span>
                </div>
            )}

            {/* Nome */}
            <div className="space-y-1">
                <Label htmlFor="sf-nome" className="text-xs text-muted-foreground">
                    Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                    id="sf-nome"
                    value={shippingData.nome}
                    onChange={(e) => updateShippingField('nome', e.target.value)}
                    className={inputClassName}
                    autoComplete="off"
                />
            </div>

            {/* CPF + Email */}
            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <Label htmlFor="sf-documento" className="text-xs text-muted-foreground">CPF ou CNPJ</Label>
                    <Input
                        id="sf-documento"
                        value={shippingData.documento}
                        onChange={(e) => updateShippingField('documento', e.target.value)}
                        className={inputClassName}
                        autoComplete="off"
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="sf-email" className="text-xs text-muted-foreground">Email</Label>
                    <Input
                        id="sf-email"
                        type="email"
                        value={shippingData.email}
                        onChange={(e) => updateShippingField('email', e.target.value)}
                        className={inputClassName}
                        autoComplete="off"
                    />
                </div>
            </div>

            {/* Address */}
            <div className={`space-y-3 pt-2 border-t ${dividerClassName}`}>
                <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-3 space-y-1">
                        <Label htmlFor="sf-rua" className="text-xs text-muted-foreground">Rua / Av.</Label>
                        <Input
                            id="sf-rua"
                            value={shippingData.rua}
                            onChange={(e) => updateShippingField('rua', e.target.value)}
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="sf-numero" className="text-xs text-muted-foreground">Nº</Label>
                        <Input
                            id="sf-numero"
                            value={shippingData.numero}
                            onChange={(e) => updateShippingField('numero', e.target.value)}
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="sf-complemento" className="text-xs text-muted-foreground">Complemento</Label>
                        <Input
                            id="sf-complemento"
                            value={shippingData.complemento}
                            onChange={(e) => updateShippingField('complemento', e.target.value)}
                            placeholder="Apto, Sala (Opcional)"
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="sf-bairro" className="text-xs text-muted-foreground">Bairro</Label>
                        <Input
                            id="sf-bairro"
                            value={shippingData.bairro}
                            onChange={(e) => updateShippingField('bairro', e.target.value)}
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-3 space-y-1">
                        <Label htmlFor="sf-cidade" className="text-xs text-muted-foreground">Cidade</Label>
                        <Input
                            id="sf-cidade"
                            value={shippingData.cidade}
                            onChange={(e) => updateShippingField('cidade', e.target.value)}
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-span-1 space-y-1">
                        <Label htmlFor="sf-uf" className="text-xs text-muted-foreground">UF</Label>
                        <Input
                            id="sf-uf"
                            value={shippingData.uf}
                            onChange={(e) => updateShippingField('uf', e.target.value.toUpperCase())}
                            maxLength={2}
                            className={`${inputClassName} uppercase`}
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-span-2 space-y-1">
                        <Label htmlFor="sf-cep" className="text-xs text-muted-foreground">CEP</Label>
                        <Input
                            id="sf-cep"
                            value={shippingData.cep}
                            onChange={(e) => updateShippingField('cep', e.target.value)}
                            className={inputClassName}
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
