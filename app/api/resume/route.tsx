import React from 'react'
import { NextResponse } from 'next/server'
import { pdf } from '@react-pdf/renderer'
import { ResumePdfDocument } from '@/components/ResumePdf'

export async function GET() {
  const pdfBuffer = await pdf(<ResumePdfDocument />).toBuffer()

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Mobolade_Daniel_Mayowa_Resume.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}


