import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLogoUpload } from '@/hooks/useLogoUpload';


interface PersonalizationFormProps {
  productHandle?: string;
  onPersonalizationChange?: (data: {
    text: string;
    file: File | null;
    uploadedUrl: string | null;
  }) => void;
}

export const PersonalizationForm = ({
  productHandle,
  onPersonalizationChange
}: PersonalizationFormProps) => {
  // State is now fully local and passed up via onPersonalizationChange
  // const { setClientInfo, openCart } = useCartStore(); // Removed global sync

  // Initialize from global store - CHANGED: Do typically stay empty to start fresh on new product
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadLogo, deleteLogo, isUploading, uploadProgress } = useLogoUpload();

  const maxChars = 500;
  const maxFileSize = 50 * 1024 * 1024; // 50MB

  // Auto-save debounce effect for text
  // Removed auto-save debounce and global sync effects
  // We now only rely on the parent component triggering the add-to-cart action

  // Notify parent of changes
  useEffect(() => {
    onPersonalizationChange?.({ text, file, uploadedUrl });
  }, [text, file, uploadedUrl, onPersonalizationChange]);

  const handleTextChange = (value: string) => {
    if (value.length <= maxChars) {
      setText(value);
    }
  };

  const handleFileSelect = async (selectedFile: File) => {
    setUploadError(null);

    // Only validate file size - accept all file types
    if (selectedFile.size > maxFileSize) {
      setUploadError('Arquivo muito grande. Máximo 10MB.');
      return;
    }

    setFile(selectedFile);

    // Upload to storage
    const result = await uploadLogo(selectedFile);

    if (result.success && result.url) {
      setUploadedUrl(result.url);
      setUploadedUrl(result.url);
      // setClientInfo({ logoUrl: result.url, file: selectedFile }); // Removed global sync
      // openCart(); // Removed auto-open
    } else {
      setUploadError(result.error || 'Erro ao fazer upload.');
      // Keep the file locally even if upload fails
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const removeFile = async () => {
    // We DO NOT delete from storage or clear from global store
    // This allows the logo to persist in the cart even if cleared from the form view

    setFile(null);
    setUploadedUrl(null);
    setUploadError(null);
  };

  return (
    <div className="space-y-3">
      {/* Section Header */}
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
        Basta preencher uma única vez
      </p>

      {/* Main Container */}
      <div
        className="rounded-2xl md:rounded-3xl bg-secondary/80 p-4 md:p-5"
        style={{ boxShadow: 'var(--clay-shadow-sm)' }}
      >
        {/* Title */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-logo-gradient flex items-center justify-center text-white">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-foreground text-base md:text-lg">Personalização</h3>
        </div>

        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Text Area */}
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ex: Nome da clínica, telefone, endereço, redes sociais..., cores, etc."
              className={cn(
                "w-full h-32 md:h-40 p-4 rounded-xl md:rounded-2xl bg-secondary border border-border resize-none text-base",
                "focus:outline-none focus:border-accent focus:ring-2 focus:ring-primary/20",
                "placeholder:text-muted-foreground/60 transition-all"
              )}
              style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.03), inset -1px -1px 2px rgba(255,255,255,0.5)' }}
            />
            <div className="absolute bottom-3 right-3 text-[10px] md:text-xs text-muted-foreground/50">
              {text.length}/{maxChars}
            </div>
          </div>

          {/* Right: File Upload */}
          <div className="h-32 md:h-40">
            {!file ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "relative h-full rounded-xl md:rounded-2xl border-2 border-dashed cursor-pointer transition-all",
                  "flex flex-col items-center justify-center gap-2 bg-secondary",
                  isDragOver
                    ? "border-accent bg-primary/5"
                    : "border-border/60 hover:border-accent/50"
                )}
              >
                <div
                  className={cn(
                    "p-2.5 rounded-full transition-colors",
                    isDragOver ? "bg-primary/20" : "bg-secondary/50"
                  )}
                >
                  <Upload className={cn(
                    "w-5 h-5 transition-colors",
                    isDragOver ? "text-accent" : "text-muted-foreground"
                  )} />
                </div>
                <div className="text-center px-3">
                  <p className="font-medium text-foreground text-sm">
                    {isDragOver ? 'Solte aqui' : 'Arraste seu logo ou clique para enviar'}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                    Todos os formatos aceitos • Máximo 50MB
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                  "h-full p-4 rounded-xl md:rounded-2xl bg-secondary border-2 flex flex-col items-center justify-center gap-2",
                  isUploading ? "border-accent/40" : uploadedUrl ? "border-accent/40" : "border-border"
                )}
              >
                {isUploading ? (
                  <>
                    <div className="p-2 rounded-full bg-primary/20">
                      <Loader2 className="w-5 h-5 text-accent animate-spin" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-foreground">Enviando...</p>
                      <p className="text-xs text-muted-foreground">{uploadProgress}%</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 rounded-full bg-accent/20">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-center min-w-0 max-w-full px-2">
                      <p className="font-medium text-foreground truncate text-sm">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                        {uploadedUrl && (
                          <span className="text-accent ml-1">• Salvo</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {uploadedUrl && (
                        <a
                          href={uploadedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </a>
                      )}
                      <button
                        onClick={removeFile}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Error message */}
        {uploadError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-2.5 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
            <span className="text-xs md:text-sm text-destructive">{uploadError}</span>
          </motion.div>
        )}

        {/* Footer note */}
        <div className="mt-4 flex items-center gap-2 text-muted-foreground">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs md:text-sm">
            Aprovação simples, prática e com rodadas de revisão, via WhatsApp.
          </span>
        </div>
      </div>
    </div>
  );
};
