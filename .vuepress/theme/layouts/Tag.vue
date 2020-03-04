<template>
    <q-list>
        <q-item v-for="tag in $tag.list" :to="tag.path" clickable dense>
            <q-item-label overline> #{{ tag.name }}</q-item-label>
        </q-item>
    </q-list>
</template>
